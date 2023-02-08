import "./TrackerEdit";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [className, setClassName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [paraPro, setParaPro] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  function newStudent() {
    const newStudent = {
      studentId: studentId,
      firstName: firstName,
      lastName: lastName,
      className: className,
      teacher: teacher,
      paraPro: paraPro,
      roomNumber: roomNumber,
    };
    const sendData = JSON.stringify(newStudent);
    console.log(sendData);
    axios
      .post(
        "https://student-tracker-web-api-1.azurewebsites.net/api/controller/AddStudentInfo",
        newStudent,
        {
          headers: {
            ApiKey: "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",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setStudents([...students, newStudent]);
      })
      .catch((err) => {
        console.error(err);
      });
    }

  return (
    <div className="App">

      <div className="updateBox">
        <div className="change">
          <input
            className="update"
            type="text"
            value={"NOT ABLE TO EDIT ID"}
            onChange={(e) => {
              setStudentId(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <input
            className="update"
            type="text"
            placeholder="Enter first fame"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <input
            className="update"
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
      
          <br />
          <br />
          <br />
          <br />
          < select className="update" type="text" value={className}
          onChange={(e) => {
            setClassName(e.target.value);
          }}>

          </select>
          
          
          {" "}
          <br />
          <br />
          <input
            className="update"
            type="text"
            placeholder="Enter teacher name"
            value={teacher}
            onChange={(e) => {
              setTeacher(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <input
            className="update"
            type="text"
            placeholder="Enter parapro name"
            value={paraPro}
            onChange={(e) => {
              setParaPro(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <input
            className="update"
            type="text"
            placeholder="Enter room number"
            value={roomNumber}
            onChange={(e) => {
              setRoomNumber(e.target.value);
            }}
          />{" "}
          <br />
          <br />
        </div>
        </div>
        </div>

        
  )

  
        }
        <div>
          <button className="submit" onClick={() => newStudent()}>
            Add Student
          </button>
        </div>

        export default App;