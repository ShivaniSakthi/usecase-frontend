import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentProfile =()=>{
    const userName = localStorage.getItem('Name');
    const[user,setUser] = useState({ 
        rollno:"",
        firstname: "", 
        gender : "",
        lastname : "", 
        contact: "",
        email:"",
        address:"",
        dob:"",
        guadrian:"",
        cls:""
    });

    useEffect(()=>{
        loadUser();
    });

    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8081/usecase/student/profile/${userName}`);
        setUser(result.data);
    };

    return(
        <>
        <h3>Profile page</h3>
        <ol className="list-group list-group-numbered">
        <li className="list-group-item">FirstName: {user.rollno}</li>
            <li className="list-group-item">FirstName: {user.firstname}</li>
            <li className="list-group-item">LastName: {user.lastname}</li>
            <li className="list-group-item">Gaurdian: {user.guadrian}</li>
            <li className="list-group-item">DOB: {user.dob}</li>
            <li className="list-group-item">Class: {user.cls}</li>
            <li className="list-group-item">Gender: {user.gender}</li>
            <li className="list-group-item">Address: {user.address}</li>
            <li className="list-group-item">Email: {user.email}</li>
            <li className="list-group-item">Contact: {user.contact}</li>
        </ol>
        <button type="button" className="btn btn-outline-primary">Update Details</button>
        <Link to={`/studentlogin/${userName}`}><button type="button" className="btn btn-outline-primary">Close</button></Link>
        </>
    )
}

export default StudentProfile