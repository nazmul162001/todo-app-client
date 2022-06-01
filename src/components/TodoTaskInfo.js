import React from 'react';

const TodoTaskInfo = ({ todo, index, handleDeleteTodo }) => {
  const { todoTask, _id } = todo;

  return (
    <tr className="border-b dark:bg-gray-800 border-[1px] mb-2 border-gray-400 flex justify-between">
      <td
        className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
      >
        {todoTask}
      </td>
      <td className="py-3 px-3 flex">
        {/* <button className="px-3 py-1 text-2xl">
          <i class="ri-edit-box-line"></i>
        </button> */}
        <button
          onClick={() => handleDeleteTodo(_id)}
          className="px-3 py-1 text-2xl"
        >
          <i class="ri-delete-bin-line hover:text-red-500"></i>
        </button>
        {/* <button
          onClick={() => handleComplete(_id)}
          className="px-3 py-1 text-2xl"
        >
          <i class="ri-check-double-line"></i>
        </button> */}
      </td>
    </tr>
  );
};

export default TodoTaskInfo;
