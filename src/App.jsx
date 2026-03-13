import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import StudentRegister from "./pages/StudentRegister"
import StudentLogin from "./pages/StudentLogin"
import StudentDashboard from "./pages/StudentDashboard"
import FacultyLogin from "./pages/FacultyLogin"
import FacultyDashboard from "./pages/FacultyDashboard"
import ViewUsers from "./pages/ViewUsers"
import ApiDemo from "./pages/ApiDemo"
import "./App.css"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/register" element={<StudentRegister/>}/>
<Route path="/studentlogin" element={<StudentLogin/>}/>
<Route path="/studentdashboard" element={<StudentDashboard/>}/>

<Route path="/facultylogin" element={<FacultyLogin/>}/>
<Route path="/facultydashboard" element={<FacultyDashboard/>}/>

<Route path="/users" element={<ViewUsers/>}/>
<Route path="/api" element={<ApiDemo/>}/>

</Routes>

</BrowserRouter>

)

}

export default App