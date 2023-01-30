import React from "react"
import { useLogin } from "./hooks/useLogin";
import Navbar from "./Navbar";
import Feedback from "./pages/Feedback";
import Tracker from "./pages/Tracker";
import TrackerEdit from "./pages/TrackerEdit";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom"

function App() {

 const App = () => {
  const { login, isPending } = useLogin();

  return (
    <div className="App">

  return (
    <>
    <Navbar/>
    <div className="container">
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/Feedback" element= {<Feedback/>}/>
      <Route path="/Tracker" element= {<Tracker/>}/>
      <Route path="/TrackerEdit" element= {<TrackerEdit/>}/>
    </Routes>
    </div>
    
    </>
    )


      
  }

export default App;
