import {Link, useMatch, useResolvedPath} from "react-router-dom";
export default function Navbar() {

    return <nav className="nav"> 
    <Link to="/" className="site-title"><h1>Trace</h1></Link>
    <ul>
        <CustomLink to="/Tracker"><h2>Tracker</h2></CustomLink>
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