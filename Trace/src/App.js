import React from "react"

import Navbar from "./Navbar";
import Feedback from "./pages/Feedback";
import Tracker from "./pages/Tracker";
import TrackerEdit from "./pages/TrackerEdit";
import AddStudent from "./pages/AddStudent";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom"

function App() {



  return (
    <>
    <Navbar/>
    <div className="container">
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/Feedback" element= {<Feedback/>}/>
      <Route path="/Tracker" element= {<Tracker/>}/>
      <Route path="/TrackerEdit" element= {<TrackerEdit/>}/>
      <Route path="/AddStudent" element= {<AddStudent/>}/>
    </Routes>
    </div>
    
    </>


    
    )


    

      
  }

export default App;
