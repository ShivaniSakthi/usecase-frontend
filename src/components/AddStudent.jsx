import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import StudentService from "../services/StudentService";
// import axios from "axios";

const AddStudent = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstname:"",
        lastname:"",
        address:"",
        dob:"",
        gender:"",
        guadrian:"",
        cls:"",
        contact:"",
        password:"",
        username:"",
    });
    
    const{firstname,lastname, email,address,gender, password,dob,guadrian,cls,contact,username}=user;
    
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const saveperson = (e) => {
        e.preventDefault();
        // await axios.post("http://localhost:8081/usecase/student",user);
        
        StudentService.saveStudent(user).then(() => {
            alert("data added successfully");
            navigate('/login/admin');
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
                                    <input type="text" className="addforminput" placeholder="Enter your first name" name="firstname"
                                        value={firstname} onChange={(e) => onInputChange(e)}></input>
                                    {/* </div>
                                <div>     */}
                                    <label className="form-label">LastName:</label>
                                    <input type="text" className="addforminput" placeholder="Enter your last name" name="lastname"
                                        value={lastname} onChange={(e) => onInputChange(e)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Guardian:</label>
                                    <input
                                        type="text" className="addforminput" placeholder="Enter Guardian Name" name="guadrian"
                                        value={guadrian} onChange={(e) => onInputChange(e)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Address:</label>
                                    <input
                                        type="text" className="addforminput" placeholder="Enter your address" name="address"
                                        value={address} onChange={(e) => onInputChange(e)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Date Of Birth:</label>
                                    <input
                                        type="date" className="addforminput" placeholder="Enter your DOB" name="dob"
                                        value={dob} onChange={(e) => onInputChange(e)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Class:</label>
                                    <input
                                        type="number" className="addforminput" placeholder="Enter your class" name="cls"
                                        value={cls} onChange={(e) => onInputChange(e)}></input>
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
                                    <label className="form-label">Contact:</label>
                                    <input type="number" className="addforminput" placeholder="Enter Contact number " name="contact"
                                        value={contact} onChange={(e) => onInputChange(e)}></input>
                                </div>
                                <div>
                                    <label className="form-label">UserName:</label>
                                    <input
                                        type="text" className="addforminput" placeholder="Enter your user name" name="username"
                                        value={username} onChange={(e) => onInputChange(e)}></input>
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
export default AddStudent