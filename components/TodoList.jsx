"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import Priority from "./Priority";
import { HiPencilAlt } from "react-icons/hi";

export const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/todos", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch To Do's");
    }

    const data = await res.json();
    return data; 
  } catch (error) {
    console.error("Error loading To Do's: ", error);
    return { topics: [] }; 
  }
};

const updateTodo = async (id, completed, priority) => {
  try {
    const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed, priority }),
    });

    if (!res.ok) {
      throw new Error("Failed to update To Do");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error updating To Do: ", error);
  }
};

const TopicsList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const { topics } = await getTopics();
      setTopics(topics);
    };

    fetchTopics();
  }, []); 

  const handleCheckboxChange = async (id) => {
    const topic = topics.find((t) => t._id === id);
    const updatedCompleted = !topic.completed; 
    const updatedTopic = await updateTodo(id, updatedCompleted, topic.priority);
  
    if (updatedTopic) {
      setTopics((prevTopics) =>
        prevTopics.map((t) =>
          t._id === id ? { ...t, completed: updatedTopic.completed } : t
        )
      );
    }
  };

  const handleTogglePriority = (updatedTopic) => {
    setTopics((prevTopics) =>
      prevTopics.map((topic) =>
        topic._id === updatedTopic._id ? updatedTopic : topic
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-4" >
      <h1 className="text-3xl font-bold mb-4 rounded-lg">All Items</h1>
      {topics.map((t) => (
        <div
          key={t._id}
          className={`p-4 border border-slate-300 my-3 bg-[#ffffea] icons rounded-lg${
            t.completed ? ' opacity-50' : ''
          } flex justify-between gap-5 items-start`}
        >
          <div className="flex justify-center items-center icon">
            <input
              type="checkbox"
              className="form-checkbox h-6 w-6 text-[#30582ca]"
              checked={t.completed}
              onChange={() => handleCheckboxChange(t._id)}
            />
          </div>

          <div className="">
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-4">
            <Priority id={t._id} isPriority={t.priority} onTogglePriority={handleTogglePriority}/>
            <RemoveBtn id={t._id} />
            <Link href={`/editTodo/${t._id}`}>
              <HiPencilAlt size={28} className="icon" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicsList;
