import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export const Page2 = ({ users, setUsers }) => {
  const editUser = useSelector((state) => state.userState);
  const [formData, setFormData] = useState({
    name: editUser ? editUser.name : '',
    phone: editUser ? editUser.phone : '',
    email: editUser ? editUser.email : '',
  });
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editUser && Object.keys(editUser).length !== 0) {
      // Send PUT request for updating existing user
      axios
        .put(`http://127.0.0.1:8000/api/users/${editUser.id}/`, formData,
        {
          headers: {
            'X-CSRFToken': csrfToken,
          },
        })
        .then((response) => {
          // Handle successful response
          setUsers((prevUsers) => {
            const updatedUsers = prevUsers.map((user) => {
              if (user.id === editUser.id) {
                return { ...user, ...formData };
              }
              return user;
            });
            return updatedUsers;
          });
          toast.success('User successfully Updated!');
          navigate('/');
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    } else {
      // Send POST request for creating a new user
      axios
        .post('http://127.0.0.1:8000/api/users/', formData,
        {
          headers: {
            'X-CSRFToken': csrfToken,
          },
        })
        .then((response) => {
          // Handle successful response
          setUsers((prevUsers) => [...prevUsers, response.data]);
          toast.success('User successfully Created!');
          navigate('/');
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]+" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
          <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" value={formData.email} onChange={handleChange} required />
        </div>

        <button
          type="submit"
          className={`text-white ${editUser && Object.keys(editUser).length !== 0 ? 'bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300' : 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'} font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          {editUser && Object.keys(editUser).length !== 0 ? 'Update User' : 'Create User'}
        </button>
      </form>
    </main>
  );
};
