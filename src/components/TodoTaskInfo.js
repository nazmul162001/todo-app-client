import axios from 'axios';
import React, { useState } from 'react';

const TodoTaskInfo = ({ todo, index, handleDeleteTodo }) => {
  
  const { todoTask, _id, complete } = todo;
  // const [completed, setCompleted] = useState(false);


  // handleComplete todo
  const handleComplete = async () => {
    // setCompleted(!complete)
    await axios.put(`http://localhost:5000/todo/${_id}`, {
      complete: complete ? true : false,
    });
  };

  return (
    <tr className="border-b dark:bg-gray-800 border-[1px] mb-2 border-gray-400 flex justify-between">
      <td
        className={
          complete
            ? 'px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap line-through'
            : 'px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
        }
      >
        {todoTask}
      </td>
      <td className="py-3 px-3 flex">
        <button className="px-3 py-1 text-2xl">
          <i class="ri-edit-box-line"></i>
        </button>
        <button
          onClick={() => handleDeleteTodo(_id)}
          className="px-3 py-1 text-2xl"
        >
          <i class="ri-delete-bin-line"></i>
        </button>
        <button
          onClick={() => handleComplete(_id)}
          className="px-3 py-1 text-2xl"
        >
          <i class="ri-check-double-line"></i>
        </button>
      </td>
    </tr>
  );
};

export default TodoTaskInfo;
