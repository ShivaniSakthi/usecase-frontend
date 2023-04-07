import React, { useEffect, useState } from "react";
import TeacherService from '../services/TeacherService'

const Homepage = () =>{
    const[teachers,setTeacher]=useState([])

    useEffect(()=>{
        TeacherService.getAllTeachers().then((response)=>{
            setTeacher(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    },[])

    return(
        <>
        <h3 className="text-center text-light">welcome to School web Application</h3>
        
            <h2 >Teachers available</h2>
            <table className="table table-bordered table-light w-50">
                <thead>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>EmailId</th>
                    <th>Subject</th>
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
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Homepage