function StudentDashboard(){

const name=sessionStorage.getItem("student")

return(

<div className="container">

<h2>Student Dashboard</h2>

<p>Welcome {name}</p>

</div>

)

}

export default StudentDashboard