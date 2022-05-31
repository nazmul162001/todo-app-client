import React from 'react';

const TodoTaskInfo = () => {
  return (
    <tr className="border-b dark:bg-gray-800 border-[1px] mb-2 border-gray-400 flex justify-between">
      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
        Apple MacBook Pro 17"
      </td>
      <td className="py-3 px-3 flex">
        <button className="px-3 py-1 text-2xl">
          <i class="ri-edit-box-line"></i>
        </button>
        <button className="px-3 py-1 text-2xl">
          <i class="ri-delete-bin-line"></i>
        </button>
        <button className="px-3 py-1 text-2xl">
          <i class="ri-check-double-line"></i>
        </button>
      </td>
    </tr>
  );
};

export default TodoTaskInfo;
