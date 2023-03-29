import React, {useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TeacherProfile =()=>{
    const userName = localStorage.getItem('TeacherName');
    const[user,setUser] = useState({ 
        id:"",
        firstName: "", 
        gender : "",
        lastName : "", 
        contact: "",
        email:"",
        subject:""
    });

    useEffect(()=>{
        loadUser();
    });

    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8082/usecase/teacher/profile/${userName}`);
        setUser(result.data);
    };

    return(
        <>
        <h3>Profile page</h3>
        <ol className="list-group list-group-numbered">
            <li className="list-group-item">FirstName: {user.firstName}</li>
            <li className="list-group-item">LastName: {user.lastName}</li>
            <li className="list-group-item">Id: {user.id}</li>
            <li className="list-group-item">Subject: {user.subject}</li>
            <li className="list-group-item">Gender: {user.gender}</li>
            <li className="list-group-item">Email: {user.email}</li>
            <li className="list-group-item">Contact: {user.contact}</li>
        </ol>
        <br/>
        <button type="button" className="btn btn-outline-dark">Update Details</button>
        <Link to={`/teacherlogin/${userName}`}><button type="button" className="btn btn-outline-dark">Close</button></Link>
        </>
    )
}

export default TeacherProfile