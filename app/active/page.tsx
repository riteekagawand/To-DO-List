"use client"
import React, { useState, useEffect } from 'react';
import { getTopics } from '../../components/TodoList'; // Adjust the path as necessary
import Link from "next/link";
import RemoveBtn from "../../components/RemoveBtn";
import Priority from "../../components/Priority";
import { HiPencilAlt } from "react-icons/hi";

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

const ActivePage = () => {
  const [activeTopics, setActiveTopics] = useState([]);

  useEffect(() => {
    const fetchActiveTopics = async () => {
      const { topics } = await getTopics();
      const active = topics.filter(topic => !topic.completed);
      setActiveTopics(active);
    };

    fetchActiveTopics();
  }, []);

  const handleCheckboxChange = async (id) => {
    const topic = activeTopics.find((t) => t._id === id);
    const updatedCompleted = !topic.completed;

    const updatedTopic = await updateTodo(id, updatedCompleted, topic.priority);

    if (updatedTopic) {
      setActiveTopics((prevTopics) =>
        prevTopics.map((t) =>
          t._id === id ? { ...t, completed: updatedTopic.completed } : t
        )
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {activeTopics.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Active Items</h1>
          {activeTopics.map((t) => (
            <div
              key={t._id}
              className="p-4 border border-slate-300 my-3 bg-[#ffffea] rounded-lg flex justify-between gap-5 items-start"
            >
              <div className="flex justify-center items-center">
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
                <Priority id={t._id} isPriority={t.priority} />
                <RemoveBtn id={t._id} />
                <Link href={`/editTodo/${t._id}`}>
                  <HiPencilAlt size={28} className="icon" />
                </Link>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-xl font-bold text-center">No active items found.</p>
      )}
    </div>
  );
};

export default ActivePage;
