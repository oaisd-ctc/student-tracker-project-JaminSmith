import {Link, useMatch, useResolvedPath} from "react-router-dom";
import TrackerIcon from "./TrackerIcon.png";

export default function Navbar() {

    return <nav className="nav">
        <img src={TrackerIcon} alt="Tracker Logo" id="logo"/>
    <Link to="/" className="site-title" div class="zoom"><h1>Trace</h1></Link>
    <ul>
        <CustomLink to="/TrackerEdit"><h2>Edit Tracker</h2></CustomLink>
        <CustomLink to="/AddStudent"><h2>Add Student</h2></CustomLink>
        <CustomLink to="/Feedback"><h2>Feedback</h2></CustomLink>
    </ul>
    </nav>
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath =useResolvedPath(to)
    const isActive= useMatch({path:resolvedPath.pathname, end:true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}