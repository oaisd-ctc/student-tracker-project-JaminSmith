import './TrackerEdit.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [punchOuts, setPunchOuts] = useState("");
  const [inClass, setInClass] = useState("");


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
    setSelectedStudent(student);
    setStudentId(student.studentId);
    setFirstName(student.firstName);
    setLastName(student.lastName);
    setTimeOut(student.timeOut);
    setTimeIn(student.timeIn);
    setPunchOuts(student.punchOuts);
}

function updateUser() {
  const updatedStudent = {
      studentId: studentId,
      firstName: firstName,
      lastName: lastName,
      timeOut: timeOut,
      timeIn: timeIn,
      punchOuts: punchOuts,
      inClass: inClass
  };
  axios.post('https://student-tracker-web-api-1.azurewebsites.net/api/controller/UpdateStudentInfo', updatedStudent, {
      headers: {
          'ApiKey': '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'
      }
  })
  .then(res => {
      console.log(res);
  })
  .catch(err => {
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
          <th>Time Out</th>
          <th>Time In</th>
          <th>Punchouts</th>
          <th>In Class</th>
          <th>Delete</th>
          <th>Edit</th>
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
            <td>{student.inClass}</td>
            <td><button onClick={() => deleteUser(student.studentID)}>Delete</button></td>
            <td><button onClick={() => selectUser(student)}>Edit</button></td>
        </tr>
    ))}
</tbody>
    </table>
      <div>
        <input type="text" value={studentId} onChange={(e)=>{setStudentId(e.target.value)}} /> <br /><br />
        <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} /> <br /><br />
        <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} /> <br /><br />
        <input type="text" value={timeOut} onChange={(e)=>{setTimeOut(e.target.value)}} /> <br /><br />
        <input type="text" value={timeIn} onChange={(e)=>{setTimeIn(e.target.value)}} /> <br /><br />
        <input type="text" value={punchOuts} onChange={(e)=>{setPunchOuts(e.target.value)}} /> <br /><br />
        <input type="boolean" value={inClass} onChange={(e)=>{setInClass(e.target.value)}} /> <br /><br />
        
        <button onClick={() => updateUser()}>Update</button>

      </div>
    </div>
  );
}
export default App;
