import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import TeacherService from "../services/TeacherService";

const AddTeacher = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        contact:"",
        password:"",
        subject:"",
        gender:"",
        username:""
    });
    
    const{firstName,lastName,gender, email,password,subject,contact,username}=user;
    
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const saveperson = (e) => {
        e.preventDefault();
        
        TeacherService.saveTeacher(user).then((response) => {
            alert("data added successfully");
            navigate('/login/admin');
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="Card col-md-7 offset-md-3 offset-md-2">
                        <h2 className="text-center">Add changes</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">FirstName:</label>
                                    <input type="text" className="addforminput" placeholder="Enter your first name" name="firstName"
                                        value={firstName} onChange={(e) => onInputChange(e)}></input>
                                    {/* </div>
                                <div>     */}
                                    <label className="form-label">LastName:</label>
                                    <input type="text" className="addforminput" placeholder="Enter your last name" name="lastName"
                                        value={lastName} onChange={(e) => onInputChange(e)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Subject:</label>
                                    <input
                                        type="text" className="addforminput" placeholder="Enter your subject" name="subject"
                                        value={subject} onChange={(e) => onInputChange(e)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Gender:</label>
                                    <select className="form-select w-25" aria-label="Default select example" name="gender" value={gender} onChange={(e) => onInputChange(e)}>
                                        <option value="" selected disabled hidden>Select Role </option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                    </select>
                                </div>
                                <div >
                                    <label className="form-label">Email:</label>
                                    <input type="email" className="addforminput" placeholder="Enter your email" name="email"
                                        value={email} onChange={(e) => onInputChange(e)}></input>
                                    {/* </div>
                                <div>         */}
                                    <label className="form-label">Contact:</label>
                                    <input type="number" className="addforminput" placeholder="Enter Contact number " name="contact"
                                        value={contact} onChange={(e) => onInputChange(e)}></input>
                                </div>
                                <div>
                                    <label className="form-label">UserName:</label>
                                    <input
                                        type="text" className="addforminput" placeholder="Enter your user name" name="username"
                                        value={username} onChange={(e) => onInputChange(e)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Password:</label>
                                    <input
                                        type="text" className="addforminput" placeholder="Enter your password" name="password"
                                        value={password} onChange={(e) => onInputChange(e)}></input>
                                </div>
                                <button className="btn btn-success" onClick={(e) => saveperson(e)}>Submit</button>
                                <Link to='/login/admin'><button type="button" class="btn btn-danger">Cancel</button></Link>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddTeacher