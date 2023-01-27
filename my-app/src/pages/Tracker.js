import React, { useState, useEffect } from 'react';
import axios from 'axios';
require('./tracker.css')
const Table = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    let interval = null
    const getStudents = async () => {
    try {
    const response = await axios.get('https://student-tracker-web-api-1.azurewebsites.net/api/controller/StudentInfo', {
    headers: {
    'ApiKey': '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'
    }
    });
    setStudents(response.data);
    } catch (err) {
    console.error(err);
    }
    }
    interval = setInterval(() => {
    getStudents();
    }, 1000);
    return () => clearInterval(interval);
    }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Time Out</th>
          <th>Time In</th>
          <th>Punchouts</th>
          <th>In Class</th>
          <th>Class Name</th>
          <th>Teacher</th>
          <th>ParaPro</th>
          <th>Room Number</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.studentID}>
            <td>{student.studentId}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.timeOut}</td>
            <td>{student.timeIn}</td>
            <td>{student.punchOuts}</td>
            <td>{student.inClass ? 'Yes' : 'No'}</td>
            <td>{student.className}</td>
            <td>{student.teacher}</td>
            <td>{student.paraPro}</td>
            <td>{student.roomNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
