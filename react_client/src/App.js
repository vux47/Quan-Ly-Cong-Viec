import React, { useCallback, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Appnav from './Appnav';
import Banner from './Banner';
import Footer from './Footer';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

  const fetchData = useCallback(async () => {
    try {
      const apiUrl = API_BASE_URL ? `${API_BASE_URL}/users/students` : '/users/students';
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Cannot fetch student data');
      }

      const students = await response.json();
      setData(students);
    } catch (err) {
      setError(err.message);
    }
  }, [API_BASE_URL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (data || error) {
      return undefined;
    }

    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [data, error]);

  if (!data && !error) {
    return <div className="loading-box">Loading...({count}) seconds</div>;
  }

  if (error) {
    return <div className="loading-box">Error: {error}</div>;
  }

  return (
    <>
      <Appnav />
      <Banner />

      <Table striped bordered hover size="sm" className="mb-0">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.id}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Footer />
    </>
  );
}

export default App;