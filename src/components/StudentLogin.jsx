import React from "react";
import { Link,useParams } from "react-router-dom";

const StudentLogin = () =>{
    const { username } = useParams();
    localStorage.setItem('Name', username);
    
    return(
        <>
        <h3>Student Login</h3>
        <h5>Apply Leave:</h5>
        <Link as={Link} to={`/login/student/leave/${username}`}><button type="button" className="btn btn-outline-primary">Apply Leave</button></Link>
        <br/><br/>
        <h5>Pay Fees:</h5>
        <Link as={Link} to={`/login/student/payfee/${username}`}><button type="button" className="btn btn-outline-primary">Pay Fees</button></Link>
        <br/><br/>
        <h5>Message Teacher:</h5>
        <Link as={Link} to={`/login/student/message/${username}`}><button type="button" className="btn btn-outline-primary">Message Teacher</button></Link>
        </>
    )
}

export default StudentLogin