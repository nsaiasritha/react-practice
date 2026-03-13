import axios from "axios"
import { useState } from "react"

function ApiDemo(){

const [data,setData]=useState([])

const fetchData=async()=>{

let res=await axios.get(
"https://jsonplaceholder.typicode.com/users"
)

setData(res.data)

}

return(

<div className="container">

<h2>API Demo</h2>

<button onClick={fetchData}>Fetch API</button>

<ul>

{data.map((u)=>(
<li key={u.id}>{u.name} - {u.email}</li>
))}

</ul>

</div>

)

}

export default ApiDemo