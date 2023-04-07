import React from "react";
import { Link, useParams } from "react-router-dom";

const TeacherLogin=()=>{
    const { username } = useParams();
    localStorage.setItem('TeacherName', username);
    return(
        <>
        <h3>Teacher Login</h3>
        <h5>View Leave Application:</h5>
        <Link as={Link} to={`/login/teacher/leave/${username}`}><button type="button" className="btn btn-outline-primary">View Leave</button></Link>
        <br/><br/>
        
        <h5>View Message From Students :</h5>
        <Link as={Link} to={`/login/teacher/message/${username}`}><button type="button" className="btn btn-outline-primary">View Messages</button></Link>
        </>
    )
}

export default TeacherLogin