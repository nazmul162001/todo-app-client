import React from 'react';

const TodoTask = () => {
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
        <tbody>{}</tbody>
      </table>
    </div>
  );
};

export default TodoTask;
