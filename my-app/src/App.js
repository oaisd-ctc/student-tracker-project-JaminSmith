import Navbar from "./Navbar";
import Feedback from "./pages/Feedback";
import Tracker from "./pages/Tracker";
import TrackerEdit from "./pages/TrackerEdit";
import Home from "./pages/Home";

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component=<Home/>
      break
      case "/Feedback":
        component=<Feedback/>
      break
      case "/Tracker":
        component=<Tracker/>
      break
      case "/TrackerEdit":
        component= <TrackerEdit/>
      break
    default:
      component = <div>404 Page Not Found</div>
      break
      
  }
  return (
  <>
  <Navbar/>
  <div className="container">
  {component}
  </div>
  
  </>
  )
}

export default App;
