import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#84a98c] px-8 py-3 rounded-3xl">
      <Link className="text-white font-bold" href={"/"}>
       <p className="text-[30px]">To Do List</p>
      </Link>
      <Link className="bg-[#ff9f1c] p-2 mr-6 rounded-2xl border border-white hover:bg-[#]" href={"/addTodo"}>
        <p className="text-white text-[20px]">Add Topic</p>
      </Link>
    </nav>
  );
}