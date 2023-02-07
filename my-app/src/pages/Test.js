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
}

export default App;