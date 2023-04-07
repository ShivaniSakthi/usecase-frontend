import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
    return(
        <>
        <h3>Add / Update / Delete student & staff details</h3>
        <h5>Add Details:</h5>
        <Link to='/login/admin/addstudent'><button type="button" className="btn btn-outline-primary">Add Student</button></Link>
        <Link to='/login/admin/addteacher'><button type="button" className="btn btn-outline-primary">Add Teacher</button></Link>
        <br/><br/>
        <h5>Update Details:</h5>
        <Link to='/login/admin/updatestudent'><button type="button" className="btn btn-outline-primary">Update Student</button></Link>
        <Link to='/login/admin/updateteacher'><button type="button" className="btn btn-outline-primary">Update Teacher</button></Link>
        <br/><br/>
        {/* <h5>Delete Details:</h5>
        <button type="button" className="btn btn-outline-primary">Delete Student</button>
        <button type="button" className="btn btn-outline-primary">Delete Teacher</button> */}
        </>
    )
}

export default AdminLogin