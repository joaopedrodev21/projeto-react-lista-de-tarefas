'use client'
import { useState } from 'react'
import {Task} from '../types/Task'

const Page = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  
  const handleAddTask = () => {
    if(input.trim() === "") return;
    const newTask: Task = {
      id: Date.now(),
      title: input,
      completed: false,
      date: new Date().toISOString()
    };
    setTasks(prev => [...prev, newTask]);
    setInput("");

  };
  const handleToggleTask = (id : number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return(
    <div className='w-full max-w-xl mx-auto bg-gray-900 p-4 rounded-lg mt-10'>
      <h1 className='text-3xl font-bold p-4'>Projeto Lista de Tarefas</h1>
      <div className='flex flex-col sm:flex-row mb-4 gap-2'>
        <input
          className='border p-2 flex-1 w-full sm:w-auto'        
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Adicionar nova tarefa"
          onKeyDown={e => {
            if (e.key === "Enter") handleAddTask();
          }}
        />
        <button className='w-full sm:w-auto cursor-pointer bg-blue-500 text-white px-4 py-2 rounded' onClick={handleAddTask}>
          Adicionar
        </button>
        <button className='w-full sm:w-auto cursor-pointer bg-red-500 text-white px-4 py-2 rounded' onClick={() => setTasks([])} >
          Remover
        </button>
      </div>
      <div className='flex flex-col gap-2'>
        {tasks.length === 0 && (
          <span className='text-gray-500'>Nenhuma tarefa encontrada</span>
        )}
        {tasks.map(task => (
          <div 
            key={task.id}
            className={`flex items-center p-5 border rounded shadow transition-colors duration-200 w-full ${task.completed ? 'bg-green-100' : 'bg-gray-800'}`}
          >
            <input
              type= "checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
              className='cursor-pointer h-5 w-5'
            /> 
            <span className={task.completed ? 'line-through text-gray-500 ml-2' : 'ml-2'}>{task.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Page