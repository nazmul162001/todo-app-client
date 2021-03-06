import axios from 'axios';
import React from 'react';
import TodoTask from './TodoTask';

const Homepage = () => {
  const handleAddTodo = async(e) => {
    e.preventDefault();
    const todoTask = e.target.todo.value;

    // post/insert data to database
    await axios.post('http://localhost:5000/todo', {
      todoTask
    })
    e.target.reset()
  };

  return (
    <div className="todo w-full mx-auto mb-12">
      <div
        style={{ background: '#FF33AE' }}
        className="empty-box w-full h-56 bg-primary"
      ></div>

      <div className="add-todo w-4/5 md:w-1/2 mx-auto bg-gray-300 p-5 rounded-lg mt-[-50px]">
        <form onSubmit={handleAddTodo}>
          <label className="text-left" htmlFor="todo">
            Add Your Task
          </label>
          <br />
          <div className="inline-flex rounded-md shadow-sm w-full" role="group">
            <input
              className=" cursor-text py-2 px-4 text-sm font-medium w-full text-gray-900 bg-transparent rounded-l-lg border border-gray-900 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              type="text"
              name="todo"
              id="todo"
              placeholder="Add Todo"
            />

            <input
              className="cursor-pointer py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              type="submit"
              value="Add Todo"
            />
          </div>
        </form>
      </div>
      <TodoTask />
    </div>
  );
};

export default Homepage;
