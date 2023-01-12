import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setData(result.data));
  }, []);

  const info = data.map((employee) => {
    return <div> {employee.employee_name} </div>;
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <form>
        {" "}
        Enter your Search:
        <input type="text" onChange={handleChange}></input>
      </form>
      <div className="suggestions-div">{info}</div>
    </div>
  );
}