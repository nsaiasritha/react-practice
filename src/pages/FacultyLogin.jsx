import { useState } from "react"

function FacultyLogin(){

const [username,setUsername]=useState("")
const [password,setPassword]=useState("")

const login=(e)=>{

e.preventDefault()

if(username==="faculty" && password==="1234"){

sessionStorage.setItem("faculty","true")

window.location="/facultydashboard"

}
else{

alert("Invalid Login")

}

}

return(

<div className="container">

<h2>Faculty Login</h2>

<form onSubmit={login}>

<input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

<button>Login</button>

</form>

</div>

)

}

export default FacultyLogin