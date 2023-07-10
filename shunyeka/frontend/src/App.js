import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AllRoutes } from './routes/AllRoutes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const url = 'http://127.0.0.1:8000/api/users/';
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [url]);

  return (
    <div className="App">
      <Header />
      <AllRoutes users={users} setUsers={setUsers} />
      <Footer />
    </div>
  );
}

export default App;
