import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './tracker.css';
require('dotenv').config();
const Table = ({
  apiUrl
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(apiUrl, {
        headers: {
          'ApiKey': process.env.REACT_APP_API_KEY,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(response => response.json()).then(data => setData(data)).catch(error => console.log(error));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "FirstName"), /*#__PURE__*/React.createElement("th", null, "Last Name"), /*#__PURE__*/React.createElement("th", null, "Address"), /*#__PURE__*/React.createElement("th", null, "Sending School"), /*#__PURE__*/React.createElement("th", null, "Time In"), /*#__PURE__*/React.createElement("th", null, "Time Out"), /*#__PURE__*/React.createElement("th", null, "Number of punchouts"), /*#__PURE__*/React.createElement("th", null, "Details"))), /*#__PURE__*/React.createElement("tbody", null, data.map(item => /*#__PURE__*/React.createElement("tr", {
    key: item.studentId
  }, /*#__PURE__*/React.createElement("td", null, item.firstName), /*#__PURE__*/React.createElement("td", null, item.lastName), /*#__PURE__*/React.createElement("td", null, item.addressLine1), /*#__PURE__*/React.createElement("td", null, item.SendingSchool), /*#__PURE__*/React.createElement("td", null, item.timeOut), /*#__PURE__*/React.createElement("td", null, item.timeIn), /*#__PURE__*/React.createElement("td", null, item.notInSampleData))))));
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(Table, {
  apiUrl: "https://student-tracker-web-api-1.azurewebsites.net/api/controller/StudentInfo"
}));
export default Table;