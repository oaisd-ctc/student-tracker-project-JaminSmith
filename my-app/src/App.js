import React, { useState, useEffect } from "react";
const Table = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://student-tracker-web-api-1.azurewebsites.net/api/controller/StudentInfo",{
      method: 'POST',
        headers: {
            'X-API-KEY': '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',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
      
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
    <table>
      <thead>
        <tr>
        <th>ID</th>
        <th>FirstName</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Sending School</th>
        <th>Time In</th>
        <th>Time Out</th>
        <th>Number of punchouts</th>
        <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.studentId}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.addressLine1}</td>
            <td>{item.SendingSchool}</td>
            <td>{item.timeOut}</td>
            <td>{item.timeIn}</td>
            <td>{item.notInSampleData}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
export default Table;