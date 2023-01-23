import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Table = () => {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});
  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get('https://student-tracker-web-api-1.azurewebsites.net/api/controller/StudentInfo', {
          headers: {
            'api-key': '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'
          }
        });
        setStudents(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getStudents();
  }, []);
  const editRow = (student) => {
    setEditing(true);
    setCurrentStudent({ ...student });
  };
  const saveRow = async (student) => {
    try {
      if (student.studentID) {
        // Update existing student
        await axios.put(`https://student-tracker-web-api-1.azurewebsites.net/api/controller/StudentInfo/${student.studentID}`, student, {
          headers: {
            'api-key': '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'
          }
        });
      } else {
        // Create new student
        await axios.post('https://student-tracker-web-api-1.azurewebsites.net/api/controller/StudentInfo', student, {
          headers: {
            'api-key': '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'
          }
        });
      }
      setEditing(false);
      const updatedStudents = await axios.get('https://student-tracker-web-api-1.azurewebsites.net/api/controller/StudentInfo', {
        headers: {
          'api-key': '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'
        }
      });
      setStudents(updatedStudents.data);
    } catch (err) {
      console.error(err);
    }
  };
  

  const deleteRow = async (studentID) => {
    try {
      await axios.delete(`https://student-tracker-web-api-1.azurewebsites.net/api/controller/StudentInfo/${studentID}`, {
        headers: {
          'api-key': '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'
        }
      });
      const updatedStudents = await axios.get('https://student-tracker-web-api-1.azurewebsites.net/api/controller/StudentInfo', {
        headers: {
          'api-key': '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'
        }
      });
      setStudents(updatedStudents.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address Line 1</th>
            <th>Sending School</th>
            <th>Time Out</th>
            <th>Time In</th>
            <th>Object1</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.studentID}>
              {editing && currentStudent.studentID === student.studentID ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={currentStudent.studentID}
                      onChange={(e) => setCurrentStudent({ ...currentStudent, studentID: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={currentStudent.firstName}
                      onChange={(e) => setCurrentStudent({ ...currentStudent, firstName: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={currentStudent.lastName}
                      onChange={(e) => setCurrentStudent({ ...currentStudent, lastName: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={currentStudent.addressLine1}
                      onChange={(e) => setCurrentStudent({ ...currentStudent, addressLine1: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={currentStudent.sendingSchool}
                      onChange={(e) => setCurrentStudent({ ...currentStudent, sendingSchool: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={currentStudent.timeOut}
                      onChange={(e) => setCurrentStudent({ ...currentStudent, timeOut: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={currentStudent.timeIn}
                      onChange={(e) => setCurrentStudent({ ...currentStudent, timeIn: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={currentStudent.object1}
                      onChange={(e) => setCurrentStudent({ ...currentStudent, object1: e.target.value })}
                    />
                  </td>
                  <td>
                    <button onClick={() => saveRow(currentStudent)}>Save</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                  </td>
                />
              ) : (
                <>
                  <td>{student.studentID}</td>
                  <td>{student.firstName}
                  <td>{student.lastName}</td>
                  <td>{student.addressLine1}</td>
                  <td>{student.sendingSchool}</td>
                  <td>{student.timeOut}</td>
                  <td>{student.timeIn}</td>
                  <td>{student.object1}</td>
                  <td>
                    <button onClick={() => editRow(student)}>Edit</button>
                    <button onClick={() => deleteRow(student.studentID)}>Delete</button>
                  </td>
                </td>
                
              )
            

          
          ))}
          </></tr>

        </tbody>
      </table>
      {!editing && (
        <button onClick={() => setEditing(true)}>Add New Student</button>
      )}
    </div>
  );
}
export default Table;