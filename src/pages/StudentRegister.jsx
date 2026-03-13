import { useState } from "react"

function StudentRegister(){

const [student,setStudent]=useState({
name:"",
email:"",
roll:"",
branch:"",
password:""
})

const handleChange=(e)=>{
setStudent({...student,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{

e.preventDefault()

let students=JSON.parse(localStorage.getItem("students"))||[]

students.push(student)

localStorage.setItem("students",JSON.stringify(students))

alert("Student Registered Successfully")

}

return(

<div className="container">

<h2>Student Registration</h2>

<form onSubmit={handleSubmit}>

<input name="name" placeholder="Name" onChange={handleChange}/>

<input name="email" placeholder="Email" onChange={handleChange}/>

<input name="roll" placeholder="Roll Number" onChange={handleChange}/>

<input name="branch" placeholder="Branch" onChange={handleChange}/>

<input type="password" name="password" placeholder="Password" onChange={handleChange}/>

<button type="submit">Register</button>

</form>

</div>

)

}

export default StudentRegister