import React,{useState, useEffect} from "react";
import TeacherService from "../services/TeacherService";
import { Link } from "react-router-dom";

const UpdateTeacher = () => {
    const[teachers,setTeacher]=useState([])

    useEffect(()=>{
        TeacherService.getAllTeachers().then((response)=>{
            setTeacher(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    },[]);

    return(
        <>
            <h2 >Available Teacher</h2>
            <table className="table table-bordered table-light w-50">
                <thead>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>EmailId</th>
                    <th>Subject</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        teachers.map(
                            teacher =>
                            <tr key={teacher.id}>
                                <td>{teacher.id}</td>
                                <td>{teacher.firstName}</td>
                                <td>{teacher.lastName}</td>
                                <td>{teacher.email}</td>
                                <td>{teacher.subject}</td>
                                <td><button>Edit</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link to='/login/admin'><button type="button" class="btn btn-danger">Cancel</button></Link>
        </>
    )
}
export default UpdateTeacher