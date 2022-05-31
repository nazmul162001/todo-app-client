import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TodoTaskInfo from './TodoTaskInfo';

const TodoTask = () => {
  // get todo
  const [todos, setTodos] = useState([]);
  useEffect(()=> {
    axios.get('http://localhost:5000/todo')
    .then(res=> setTodos(res.data))
  },[todos])


  // handle delete todo
  const handleDeleteTodo = async(id) => {
    await axios.delete(`http://localhost:5000/todo/${id}`)
  }
  
  return (
    <div className="relative overflow-x-auto w-4/5 md:w-1/2 mx-auto bg-gray-300 p-5 rounded-lg mt-8">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className=" uppercase bg-gray-300 dark:bg-gray-700">
          <tr className="flex justify-between">
            <th scope="col" className="px-6 py-3">
              Todo Task
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo, index) => <TodoTaskInfo 
              key={index}
              index={index}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
            />)
          }
        </tbody>
      </table>
    </div>
  );
};

export default TodoTask;
