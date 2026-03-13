import { useEffect, useState } from "react"

function ViewUsers(){

const [students,setStudents]=useState([])

useEffect(()=>{

let data=JSON.parse(localStorage.getItem("students"))||[]

setStudents(data)

},[])

return(

<div className="container">

<h2>Registered Students</h2>

<table border="1">

<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Roll</th>
<th>Branch</th>
</tr>
</thead>

<tbody>

{students.map((s,i)=>(

<tr key={i}>
<td>{s.name}</td>
<td>{s.email}</td>
<td>{s.roll}</td>
<td>{s.branch}</td>
</tr>

))}

</tbody>

</table>

</div>

)

}

export default ViewUsers