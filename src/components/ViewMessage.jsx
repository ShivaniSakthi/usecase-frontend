import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ViewMessage = () => {
    const userName = localStorage.getItem('TeacherName');

    const [viewmessages, setViewMessages] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8083/usecase/student/viewmessage/${userName}`);
        setViewMessages(result.data);
    };

    return (
        <>
            <h2 >View Messages from Student</h2>
            Showing messages for {userName}
            <table className="table table-bordered table-light w-50">
                <thead>
                    <th>Message id</th>
                    <th>Message</th>
                    <th>Student Name</th>
                </thead>
                <tbody>
                    {
                        viewmessages.map(
                            viewmessage =>
                            <tr key={viewmessage.msgid}>
                                <td>{viewmessage.msgid}</td>
                                <td>{viewmessage.message}</td>
                                <td>{viewmessage.studentName}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link to={`/teacherlogin/${userName}`}><button type="button" className="btn btn-outline-dark">Close</button></Link>
        </>
    )
}

export default ViewMessage