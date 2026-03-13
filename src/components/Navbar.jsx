import { Link } from "react-router-dom"

function Navbar(){

const faculty=sessionStorage.getItem("faculty")
const student=sessionStorage.getItem("student")

const logout=()=>{
sessionStorage.clear()
window.location="/"
}

return(

<div className="navbar">

<Link to="/">Home</Link>

{!student && !faculty && (
<>
<Link to="/register">Student Register</Link>
<Link to="/studentlogin">Student Login</Link>
<Link to="/facultylogin">Faculty Login</Link>
</>
)}

{student && (
<>
<Link to="/studentdashboard">Student Dashboard</Link>
<button onClick={logout}>Logout</button>
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