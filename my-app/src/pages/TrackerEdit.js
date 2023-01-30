import "./TrackerEdit.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [punchOuts, setPunchOuts] = useState(0);
  const [inClass, setInClass] = useState(Boolean);
  const [className, setClassName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [paraPro, setParaPro] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  useEffect(() => {
    let interval = null;
    const getStudents = async () => {
      try {
        const response = await axios.get(
          "https://student-tracker-web-api-1.azurewebsites.net/api/controller/StudentInfo",
          {
            headers: {
              ApiKey: "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",
            },
          }
        );
        setStudents(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    interval = setInterval(() => {
      getStudents();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function selectStudent(student) {
    setSelectedStudent(student);
    setStudentId(student.studentId);
    setFirstName(student.firstName);
    setLastName(student.lastName);
    setTimeOut(student.timeOut);
    setTimeIn(student.timeIn);
    setPunchOuts(parseInt(student.punchOuts));
    setInClass(student.inClass);
    setClassName(student.className);
    setTeacher(student.teacher);
    setParaPro(student.paraPro);
    setRoomNumber(student.roomNumber);
  }

  

  function newStudent() {
    const newStudent = {
      studentId: studentId,
      firstName: firstName,
      lastName: lastName,
      timeOut: timeOut,
      timeIn: timeIn,
      punchOuts: punchOuts,
      inClass: inClass,
      className: className,
      teacher: teacher,
      paraPro: paraPro,
      roomNumber: roomNumber,
    };
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

  function updateStudent() {
    const updatedStudent = {
      studentId: studentId,
      firstName: firstName,
      lastName: lastName,
      timeOut: timeOut,
      timeIn: timeIn,
      punchOuts:punchOuts,
      inClass: inClass,
      className: className,
      teacher: teacher,
      paraPro: paraPro,
      roomNumber: roomNumber,
    };


    const sendData = JSON.stringify(updatedStudent);
    console.log(sendData);
    axios.post(
      "https://student-tracker-web-api-1.azurewebsites.net/api/controller/UpdateStudentInfo",
      updatedStudent,
      {
        headers: {
          ApiKey: "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",
          "Content-Type": "application/json",
        },
      }
    );

    axios
      .post(
        "https://student-tracker-web-api-1.azurewebsites.net/api/controller/UpdateStudentInfo/" +
          studentId,
        updatedStudent,
        {
          headers: {
            ApiKey: "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",
            "Content-Type": "application/json",
          },
        }
      )

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function deleteStudent(studentId) {
    axios
      .delete(
        `https://student-tracker-web-api-1.azurewebsites.net/api/controller/UpdateStudentInfo/${studentId}`,
        {
          headers: {
            ApiKey: "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",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setStudents(
          students.filter((student) => student.studentId !== studentId)
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="App">
      <h1>Edit/Add/Delete Data</h1>
      <table border="1" style={{ float: "left" }}>
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
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.studentId}>
              <td>{student.studentId}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.timeOut}</td>
              <td>{student.timeIn}</td>
              <td>{student.punchOuts}</td>
              <td>{student.inClass ? "Yes" : "No"}</td>
              <td>{student.className}</td>
              <td>{student.teacher}</td>
              <td>{student.paraPro}</td>
              <td>{student.roomNumber}</td>
              <td>
                <button onClick={() => deleteStudent(student.studentId)}>
                  Delete
                </button>
              </td>
              <td>
                <button onClick={() => selectStudent(student)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
          <input
            className="update"
            type="text"
            placeholder="Enter time out"
            value={timeOut}
            onChange={(e) => {
              setTimeOut(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <input
            className="update"
            type="text"
            placeholder="Enter time in"
            value={timeIn}
            onChange={(e) => {
              setTimeIn(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <input
            className="update"
            type="text"
            placeholder="Enter number of punchouts"
            value={punchOuts}
            onChange={(e) => {
              setPunchOuts(e.target.value);
            }}
          />{" "}
          <br />
          <br />
         {/*} <input
            className="update"
            type="time"
            placeholder="Enter timeout"
            value={timeOut}
            onChange={(e) => {
              setTimeOut(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <input
            className="update"
            type="time"
            placeholder="Enter time in"
            value={timeIn}
            onChange={(e) => {
              setTimeIn(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <input
            className="update"
            type="text"
            placeholder="Enter number of punchouts"
            value={punchOuts}
            onChange={(e) => {
              setPunchOuts(e.target.value);
            }}
          />{" "}*/}
          <br />
          <br />
          <div className="radio">
            <p> In Class:</p>
            
            <div>
              <input
                type="radio"
                name="inClass"
                value={true}
                checked={inClass === true}
                onChange={(e) => setInClass(e.target.value === "true")}
              />
              &nbsp;Yes
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="inClass"
                value={false}
                checked={inClass === false}
                onChange={(e) => setInClass(e.target.value === "true")}
              />
              &nbsp;No
            </div>
          </div>
          <br />
          <br />
          <input
            className="update"
            type="text"
            placeholder="Enter class name"
            value={className}
            onChange={(e) => {
              setClassName(e.target.value);
            }}
          />{" "}
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
        <div>
          <button className="submit" onClick={() => updateStudent()}>
            Update
          </button>
        </div>

        <div>
          <button className="submit" onClick={() => newStudent()}>
            Add Student
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
