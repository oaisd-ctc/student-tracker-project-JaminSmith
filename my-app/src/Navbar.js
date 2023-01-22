export default function Navbar() {

    return <nav className="nav"> 
    <a href="/" className="site-title">Stduent Tracker</a>
    <ul>
        <CustomLink href="/Tracker">Tracker</CustomLink>
        <CustomLink href="/TrackerEdit">Edit Tracker</CustomLink>
        <CustomLink href="/Feedback">Feedback</CustomLink>
    </ul>
    </nav>
}

function CustomLink({ href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}