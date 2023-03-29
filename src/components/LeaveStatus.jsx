import React from "react";
// import TeacherService from '../services/TeacherService'

const LeaveStatus = () =>{

    // const[teachers,setTeacher]=useState('');

    // useEffect(()=>{
    //     TeacherService.getAllTeachers().then((response)=>{
    //         setTeacher(response.data)
    //     }).catch(error =>{
    //         console.log(error);
    //     })
    // },[])

    return(
        <>
        <h3 className="text-center text-light">welcome to School web Application</h3>
            <h2 >Leave Status</h2>
            <table className="table table-bordered table-light w-50">
                <thead>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Leave From</th>
                    <th>Leave To</th>
                    <th>Days</th>
                    <th>Reason</th>
                    <th>Status</th>
                </thead>
                {/* <tbody>
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
                </tbody> */}
            </table>
        </>
    )
}

export default LeaveStatus