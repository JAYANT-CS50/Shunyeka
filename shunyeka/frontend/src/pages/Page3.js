import React from 'react';
import { useSelector } from 'react-redux';

export const Page3 = () => {
  const user = useSelector(state => state.userState);

  return (
    <main>
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
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.id}
              </th>
              <td className="px-6 py-4">
                {user.name}
              </td>
              <td className="px-6 py-4">
                {user.email}
              </td>
              <td className="px-6 py-4">
                +91 {user.phone}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};
