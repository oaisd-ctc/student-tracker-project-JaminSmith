import {Link, resolvePath, useMatch, useResolvedPath} from "react-router-dom"
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
    const resolvedPath =useResolvedPath(to)
    const isActive= useMatch({path:resolvedPath.pathname, end:true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}