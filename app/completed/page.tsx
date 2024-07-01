"use client"
import React, { useState, useEffect } from "react";
import { getTopics } from "../../components/TodoList"; 

const CompletedPage = () => {
  const [completedTopics, setCompletedTopics] = useState([]);

  useEffect(() => {
    const fetchCompletedTopics = async () => {
      try {
        const { topics } = await getTopics();
        const completed = topics.filter(topic => topic.completed); 
        setCompletedTopics(completed);
      } catch (error) {
        
      }
    };

    fetchCompletedTopics();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      
      {completedTopics.length > 0 ? ( 
        
        completedTopics.map((t) => (
          
          <div  
            key={t._id}
            className="p-4 border border-slate-300 my-3 bg-[#ffffea] rounded-lg flex justify-between gap-5 items-start"
          >
          
            <div>  
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-xl font-bold text-center">No tasks completed.</p>
      )}
    </div>
  );
};

export default CompletedPage;
