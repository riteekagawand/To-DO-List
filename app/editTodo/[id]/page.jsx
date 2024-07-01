import EditTodosForm from "../../../components/EditTodosForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    const data = await res.json();
    return { topic: data }; // Ensure consistent return structure
  } catch (error) {
    console.log(error);
    return { topic: null }; // Return null on error
  }
};


export default async function EditTodos({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);

  if (!topic) {
    return <p>Error loading topic. Please try again later.</p>; // Handle the error case
  }

  const { title, description } = topic;

  return <EditTodosForm id={id} title={title} description={description} />;
}
