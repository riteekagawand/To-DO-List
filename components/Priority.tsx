
import React from "react";
import { IoMdStarOutline, IoMdStar } from "react-icons/io";

const updatePriority = async (id, priority) => {
  try {
    const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priority: !priority }), 
    });

    if (!res.ok) {
      throw new Error("Failed to update priority");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error updating priority: ", error);
  }
};

const Priority = ({ id, isPriority, onTogglePriority }) => {
  const handleToggle = async () => {
    const updatedTopic = await updatePriority(id, isPriority);
    onTogglePriority(updatedTopic);
  };
  

    return (
        <button onClick={handleToggle}>
          {isPriority ? <IoMdStar className="text-yellow-500 icon" size={28} /> : <IoMdStarOutline className="text-yellow-500 icon" size={28}/>}
        </button>
      );
    };

export default Priority;
