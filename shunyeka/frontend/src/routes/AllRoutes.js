import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Page1, Page2, Page3 } from '../pages';

export const AllRoutes = ({ users, setUsers }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 users={users} setUsers={setUsers} />} />
        <Route path="user/" element={<Page2 users={users} setUsers={setUsers} />} />
        <Route path="view/" element={<Page3 users={users} />} />
      </Routes>
    </>
  );
};

