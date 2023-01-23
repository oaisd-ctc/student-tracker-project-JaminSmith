import {Link} from "react-router-dom"
export default function Navbar() {

    return <nav className="nav"> 
    <Link to="/" className="site-title">Stduent Tracker</Link>
    <ul>
        <CustomLink to="/Tracker">Tracker</CustomLink>
        <CustomLink to="/TrackerEdit">Edit Tracker</CustomLink>
        <CustomLink to="/Feedback">Feedback</CustomLink>
    </ul>
    </nav>
}

function CustomLink({ to, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}