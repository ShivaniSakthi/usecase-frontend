import React,{useState, useEffect} from "react";
import StudentService from "../services/StudentService";
import { Link } from "react-router-dom";

const UpdateStudent = () => {
    const[students,setStudents]=useState([])

    useEffect(()=>{
        StudentService.getAllStudent().then((response)=>{
            setStudents(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    },[]);

    return(
        <>
            <h2 >Available Students</h2>
            <table className="table table-bordered table-light">
                <thead>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>EmailId</th>
                    <th>Date of Birth</th>
                    <th>Guardian</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>Class</th>
                    <th>Password</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        students.map(
                            student =>
                            <tr key={student.id}>
                                <td>{student.rollno}</td>
                                <td>{student.firstname}</td>
                                <td>{student.lastname}</td>
                                <td>{student.email}</td>
                                <td>{student.dob}</td>
                                <td>{student.guadrian}</td>
                                <td>{student.address}</td>
                                <td>{student.gender}</td>
                                <td>{student.cls}</td>
                                <td>{student.password}</td>
                                <td><Link to={`/editform/${student.rollno}`}><button>Edit</button></Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {/* <Link to='/editform'><button type="button" class="btn btn-danger">Edit</button></Link> */}
            <Link to='/login/admin'><button type="button" class="btn btn-danger">Cancel</button></Link>
        </>
    )
}
export default UpdateStudent