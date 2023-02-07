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
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');



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
        "https://student-tracker-web-api-1.azurewebsites.net/api/controller/UpdateStudentInfo/" + studentId, updatedStudent,
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
        `https://student-tracker-web-api-1.azurewebsites.net/api/controller/${studentId}`,
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

  function searchClassName(searchBarValue) {
    axios
      .get(
        `https://student-tracker-web-api-1.azurewebsites.nethttps/FilterStudentInfo?filterColumn=className&filterValue=${searchBarValue}`,
        {
          headers: {
            ApiKey: "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",
          },
        }
      )
  }

  return (
    <div className="App">

      <h1>Edit/Add/Delete Data</h1>

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
            type="number"
            placeholder="Enter number of punchouts"
            value={punchOuts}
            onChange={(e) => {
              setPunchOuts(e.target.value);
            }}
          />{" "}
      
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
          < select className="update" type="text" value={className}
          onChange={(e) => {
            setClassName(e.target.value);
          }}>
          <option value={className}>{className}</option>
         <option value="Agriculture & Animal Science AM">Agriculture & Animal Science AM</option>
          <option value="Agriculture & Animal Science PM">Agriculture & Animal Science PM</option>
          <option value="Environmental Field Studies AM">Environmental Field Studies AM</option>
          <option value="Environmental Field Studies PM">Environmental Field Studies PM</option>
          <option value="Graphic Design AM">Graphic Design AM</option>
          <option value="Graphic Design PM">Graphic Design PM</option>
          <option value="Media Communications AM">Media Communications AM</option>
          <option value="Media Communications PM">Media Communications PM</option>
          <option value="Business Management AM">Business Management AM</option>
          <option value="Business Management PM">Business Management PM</option>
          <option value="Culinary Arts AM">Culinary Arts AM</option>
          <option value="Culinary Arts PM">Culinary Arts PM</option>
          <option value="Entrepreneurship & Global Business AM">Entrepreneurship & Global Business AM</option>
          <option value="Entrepreneurship & Global Business PM">Entrepreneurship & Global Business PM</option>
          <option value="IT: Network & Security AM">IT: Network & Security AM</option>
          <option value="IT: Network & Security PM">IT: Network & Security PM</option>
          <option value="Pastry Arts & Baking AM">Pastry Arts & Baking AM</option>
          <option value="Pastry Arts & Baking PM">Pastry Arts & Baking PM</option>
          <option value="Software & Game Development AM">Software & Game Development AM</option>
          <option value="Software & Game Development PM">Software & Game Development PM</option>
          <option value="Construction AM">Construction AM</option>
          <option value="Construction PM">Construction PM</option>
          <option value="Electrical/Alternative Energy AM">Electrical/Alternative Energy AM</option>
          <option value="Electrical/Alternative Energy PM">Electrical/Alternative Energy PM</option>
          <option value="Plumbing & Water Systems AM">Plumbing & Water Systems AM</option>
          <option value="Plumbing & Water Systems PM">Plumbing & Water Systems PM</option>
          <option value="Engineering Design & Machine Technologies AM">Engineering Design & Machine Technologies AM</option>
          <option value="Engineering Design & Machine Technologies PM">Engineering Design & Machine Technologies PM</option>
          <option value="Mechatronics/Robotics AM">Mechatronics/Robotics AM</option>
          <option value="Mechatronics/Robotics PM">Mechatronics/Robotics PM</option>
          <option value="Welding AM">Welding AM</option>
          <option value="Welding PM">Welding PM</option>
          <option value="Advanced Healthcare AM">Advanced Healthcare AM</option>
          <option value="Advanced Healthcare PM">Advanced Healthcare PM</option>
          <option value="Dental Careers AM">Dental Careers AM</option>
          <option value="Dental Careers PM">Dental Careers PM</option>
          <option value="Emergency Medical Services AM">Emergency Medical Services AM</option>
          <option value="Emergency Medical Services PM">Emergency Medical Services PM</option>
          <option value="Health Careers/Certified Nurse Aide (CNA) AM">Health Careers/Certified Nurse Aide (CNA) AM</option>
          <option value="Health Careers/Certified Nurse Aide (CNA) PM">Health Careers/Certified Nurse Aide (CNA) PM</option>
          <option value="Health Careers/Patient Care Tech (PCT) AM">Health Careers/Patient Care Tech (PCT) AM</option>
          <option value="Health Careers/Patient Care Tech (PCT) PM">Health Careers/Patient Care Tech (PCT) PM</option>
          <option value="Health Careers/Phlebotomy AM">Health Careers/Phlebotomy AM</option>
          <option value="Health Careers/Phlebotomy PM">Health Careers/Phlebotomy PM</option>
          <option value="Cosmetology AM">Cosmetology AM</option>
          <option value="Cosmetology PM">Cosmetology PM</option>
          <option value="Public Safety & Security Services AM">Public Safety & Security Services AM</option>
          <option value="Public Safety & Security Services PM">Public Safety & Security Services PM</option>
          <option value="Teacher Academy AM">Teacher Academy AM</option>
          <option value="Teacher Academy PM">Teacher Academy PM</option>
          <option value="Auto Body Repair AM">Auto Body Repair AM</option>
          <option value="Auto Body Repair PM">Auto Body Repair PM</option>
          <option value="Automotive Technology AM">Automotive Technology AM</option>
          <option value="Automotive Technology PM">Automotive Technology PM</option>
          <option value="Diesel/Heavy Equipment Mechanics AM">Diesel/Heavy Equipment Mechanics AM</option>
          <option value="Diesel/Heavy Equipment Mechanics PM">Diesel/Heavy Equipment Mechanics PM</option>
          <option value="Career Learning Center AM">Career Learning Center AM</option>
          <option value="Career Learning Center PM">Career Learning Center PM</option>
          <option value="futurePREP'd AM">futurePREP'd AM</option>
          <option value="futurePREP'd PM">futurePREP'd PM</option>
          <option value="Summer Programs AM">Summer Programs AM</option>
          <option value="Summer Programs PM">Summer Programs PM</option>

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
            <th>Class Name  
                   <select onChange={e => setSelectedClass(e.target.value)}>
  <option value="">All</option>
  {Array.from(new Set(students.map(student => student.className))).map(className => (
    <option key={className} value={className}>{className}</option>
  ))}
</select>
</th>
            <th>Teacher</th>
            <th>ParaPro</th>
            <th>Room Number</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
        {students
  .filter(student => selectedClass === '' || student.className === selectedClass)
  .map(student => (
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
                <button onClick={() => {if (window.confirm('Are you sure you wish to delete this row?')) deleteStudent(student.studentId)}}>
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
    </div>
  );
}
export default App;
