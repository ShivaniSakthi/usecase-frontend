import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from 'react-router-dom';

const EditTeacher = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('TeacherName');
    const role= localStorage.getItem('Role');
    const id = useParams();
    const userid = Object.values(id);

    const [user, setUser] = useState({
        firstName: "",
        gender: "",
        lastName: "",
        contact: "",
        email: "",
        subject:"",
        password:""
    });

    const { firstName, lastName, email, gender, password, subject, contact} = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8082/usecase/teacher/${userid}`, user);
        if(role == 'Admin'){
            navigate(`/login/admin/updateteacher`);
        }else{
            navigate(`/teacherlogin/profile`);
        }
        
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8082/usecase/teacher/${userid}`);
        setUser(result.data);
    }

    return (
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
                                <label className="form-label">LastName:</label>
                                <input type="text" className="addforminput" placeholder="Enter your last name" name="lastName"
                                    value={lastName} onChange={(e) => onInputChange(e)}></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Subject:</label>
                                <input
                                    type="text" className="addforminput" placeholder="Enter Guardian Name" name="subject"
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
                                <label className="form-label">Contact:</label>
                                <input type="number" className="addforminput" placeholder="Enter Contact number " name="contact"
                                    value={contact} onChange={(e) => onInputChange(e)}></input>
                            </div>
                            <div>
                                {/* <label className="form-label">UserName:</label>
                                <input
                                    type="text" className="addforminput" placeholder="Enter your user name" name="userName"
                                    value={username} onChange={(e) => onInputChange(e)}></input> */}
                                <label className="form-label">Password:</label>
                                <input
                                    type="text" className="addforminput" placeholder="Enter your password" name="password"
                                    value={password} onChange={(e) => onInputChange(e)}></input>
                            </div>
                            <br/><br/>
                            <button type="button" className="btn btn-success" onClick={(e) => onSubmit(e)}>Submit</button>
                            {
                                role=="Teacher"?
                                <Link to={`/teacherlogin/profile`}><button type="button" className="btn btn-danger">cancel</button></Link>:
                                <Link to="/login/admin/updateteacher"><button type="button" className="btn btn-danger">cancel</button></Link>
                            }
                            

                        </form>
                    </div>
                </div>
            </div>
        </div>    
            );
};

export default EditTeacher