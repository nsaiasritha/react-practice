import { Link } from "react-router-dom"

function Navbar(){

const faculty=sessionStorage.getItem("faculty")

const logout=()=>{
sessionStorage.removeItem("faculty")
window.location="/"
}

return(

<div className="navbar">

<Link to="/">Home</Link>

{!faculty && (
<>
<Link to="/register">Student Register</Link>
<Link to="/facultylogin">Faculty Login</Link>
</>
)}

{faculty && (
<>
<Link to="/facultydashboard">Dashboard</Link>
<Link to="/users">View Students</Link>
<Link to="/api">API Demo</Link>
<button onClick={logout}>Logout</button>
</>
)}

</div>

)

}

export default Navbar