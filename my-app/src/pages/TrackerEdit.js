import React, { useState, useEffect } from 'react';
import axios from 'axios';
require('./tracker.css')
const Table = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get('https://student-tracker-web-api-1.azurewebsites.net/api/controller/StudentInfo', {
          headers: {
            'ApiKey':'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'
          }
        });
        setStudents(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getStudents();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address Line</th>
          <th>Sending School</th>
          <th>Time Out</th>
          <th>Time In</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.studentID}>
            <td>{student.studentID}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.addressLine1}</td>
            <td>{student.sendingSchool}</td>
            <td>{student.timeOut}</td>
            <td>{student.timeIn}</td>
            <td><button>View</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;