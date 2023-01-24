import './TrackerEdit.css';
import React, { useEffect, useState } from 'react'
function App() {
  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("https://student-tracker-web-api-1.azurewebsites.net/api/controller/StudentInfo'").then((result) => {
      headers: {
        'ApiKey';'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'
      }
      result.json().then((resp) => {
        // console.warn(resp)
        studentID(resp)
        firstName(resp[0].firstName)
        lastName(resp[0].lastName)
        addressLine1(resp[0].address)
        sendingSchool(resp[0].sendingSchool)
        timeOut(resp[0].timeOut)
        timeIn(resp[0].timeIn)
      })
    })
  }

  function deleteUser(id) {
    fetch(`https://student-tracker-web-api-1.azurewebsites.net/api/controller/UpdateStudentInfo'/${id}`, {
      method: 'DELETE',
      headers: {
        'ApiKey':'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'
      }
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function selectUser(id)
  {
    let item=users[id-1];
    setfirstName(item.lastName)
    setlastName(item.firstName)
  }
  function updateUser()
  {
    let item={name,mobile,email}
    console.warn("item",item)
    fetch(`https://student-tracker-web-api-1.azurewebsites.net/api/controller/UpdateStudentInfo`, {
      method: 'PUT',
      headers: {
        'ApiKey':'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'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
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
