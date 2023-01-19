import React, { useState, useEffect } from "react";
import './App.css';
require('dotenv').config()
const Table = ({apiUrl}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(apiUrl,{
        headers: {
            'ApiKey': process.env.REACT_APP_API_KEY,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
    <table>
      <thead>
        <tr>
        <th>ID</th>
        <th>FirstName</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Sending School</th>
        <th>Time In</th>
        <th>Time Out</th>
        <th>Number of punchouts</th>
        <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.studentId}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.addressLine1}</td>
            <td>{item.SendingSchool}</td>
            <td>{item.timeOut}</td>
            <td>{item.timeIn}</td>
            <td>{item.notInSampleData}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
export default Table;