import './TrackerEdit.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

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

  function deleteUser(id) {
    axios.delete(`https://student-tracker-web-api-1.azurewebsites.net/api/controller/UpdateStudentInfo/${id}`, {
      headers: {
        'ApiKey':'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'
      }
    }).then(res => {
      setStudents(students.filter(student => student.studentID !== id));
    }).catch(err => {
        console.error(err);
    });
  }
  function selectUser(student) {
    setfirstName(student.firstName);
    setlastName(student.lastName);
  }
  function updateUser() {
    const updatedStudent = {firstName, lastName};
    axios.put(`https://student-tracker-web-api-1.azurewebsites.net/api/controller/UpdateStudentInfo`, updatedStudent, {
      headers: {
        'ApiKey':'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'
      }
    }).then(res => {
      setfirstName("");
      setlastName("");
      setStudents(students.map(student => student.studentID === updatedStudent.studentID ? updatedStudent : student));
    }).catch(err => {
        console.error(err);
    });
  }

  return (
    <div className="App">
      <h1>Update User Data With API </h1>
      <table border="1" style={{ float: 'left' }}>
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
            <td><button onClick={() => deleteUser(student.studentID)}>Delete</button></td>

            <td><button onClick={() => selectUser(student)}>Edit</button></td>

          </tr>
        ))}
      </tbody>
    </table>
      <div>
      <input type="text" value={firstName} onChange={(e)=>{setfirstName(e.target.value)}} /> <br /><br />
        <input type="text" value={lastName} onChange={(e)=>{setlastName(e.target.value)}} /> <br /><br />
        <button onClick={updateUser} >Update User</button>  
      </div>
    </div>
  );
}
export default App;
