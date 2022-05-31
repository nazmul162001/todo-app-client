import React from 'react';

const TodoTask = () => {
  return (
    <div class="relative overflow-x-auto w-4/5 md:w-1/2 mx-auto bg-gray-300 p-5 rounded-lg mt-8">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class=" uppercase bg-gray-300 dark:bg-gray-700">
          <tr className='flex justify-between'>
            <th scope="col" class="px-6 py-3">
              Todo Task
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b dark:bg-gray-800 border-[1px] border-black flex justify-between">
            <td
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </td>
            <td class="py-3 px-3 flex">
              <button className="px-3 py-1 bg-gray-500 rounded-ls text-white">
                Delete
              </button>
              <button className="px-3 py-1 bg-gray-500 rounded-ls text-white">
                Delete
              </button>
              <button className="px-3 py-1 bg-gray-500 rounded-ls text-white">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoTask;
