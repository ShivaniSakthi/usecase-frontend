import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const LeaveStatus = () =>{
    const userName = localStorage.getItem('TeacherName');

    const[leave,setLeave]=useState([]);

    useEffect(() => {
        loadLeave();
    }, []);

    const loadLeave = async () => {
        const result = await axios.get(`http://localhost:8083/usecase/student/viewleave/${userName}`);
        setLeave(result.data);
    };

    return(
        <>
        <h3 className="text-center text-light">welcome to School web Application</h3>
            <h2 >Leave Status</h2>
            <table className="table table-bordered table-light w-75">
                <thead>
                    <th>Leave Id</th>
                    <th>Student Name</th>
                    <th>Teacher Name</th>
                    {/* <th>Class</th> */}
                    <th>Leave From</th>
                    <th>Leave To</th>
                    <th>Days</th>
                    <th>Reason</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {
                        leave.map(
                            leaves =>
                            <tr key={leaves.leaveid}>
                                <td>{leaves.leaveid}</td>
                                <td>{leaves.studentname}</td>
                                <td>{leaves.teachername}</td>
                                <td>{leaves.leavefrom}</td>
                                <td>{leaves.leaveto}</td>
                                <td>{leaves.totalleave}</td>
                                <td>{leaves.reason}</td>    
                                <td><button>Accept</button> <button>Decline</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link to={`/teacherlogin/${userName}`}><button type="button" className="btn btn-outline-dark">Close</button></Link>
        </>
    )
}

export default LeaveStatus