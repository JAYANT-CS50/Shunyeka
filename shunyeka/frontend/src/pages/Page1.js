import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { add, remove } from '../store/userSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

export const Page1 = ({ users, setUsers }) => {
  const dispatch = useDispatch();
  const [emptyuser, setEmptyUser] = useState([]);
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  // Function to add a user
  const handleAddUser = (user) => {
    dispatch(add(user));
  };

  // Function to delete a user
  const handleDeleteUser = (user) => {
    axios
      .delete(`http://127.0.0.1:8000/api/users/${user.id}/`,
      {
        headers: {
          'X-CSRFToken': csrfToken,
        },
      })
      .then((response) => {
        console.log(response.data);
        // Handle successful deletion

        // Update the users state by filtering out the deleted user
        setUsers(users.filter((u) => u.id !== user.id));
        toast.success('User successfully deleted!');
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <main>
      <div className="flex justify-end">
        <NavLink to="user/" className="mx-8">
          <button
            onClick={() => dispatch(remove(emptyuser))}
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Add User
          </button>
        </NavLink>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-10 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.id}
                </th>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">
                  <NavLink to="user/" className="mx-8">
                    <button
                      onClick={() => handleAddUser(user)}
                      type="button"
                      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Edit
                    </button>
                  </NavLink>
                  <NavLink to="view/" className="mx-8">
                    <button
                      onClick={() => handleAddUser(user)}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      View
                    </button>
                  </NavLink>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
