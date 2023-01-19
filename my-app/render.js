import React from 'react';
import ReactDOM from 'react-dom';
import Table from './src/App';
require('dotenv').config()
const rootElement = document.getElementById("root");
const apiUrl = "https://student-tracker-web-api-1.azurewebsites.net/api/controller/StudentInfo";
ReactDOM.render(<Table apiUrl={apiUrl} />, rootElement);