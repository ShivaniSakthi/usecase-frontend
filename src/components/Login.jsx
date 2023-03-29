import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import AdminService from "../services/AdminService";

const Login = () =>{
    let navigate = useNavigate();

    const[user,setUser] = useState({
        userName:"",
        password:"",
        role:""
    });

    const{userName,password,role} = user;

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    const onSubmit = (e)=>{
        e.preventDefault();
        AdminService.login(user).then((res)=>{
            console.log(res);
            if(res.request.status == 200){
                if(role=='Student'){
                    localStorage.setItem('Role', 'Student');
                    navigate(`/studentlogin/${userName}`);
                }else if(role=='Teacher'){
                    localStorage.setItem('Role', 'Teacher');
                    navigate(`/teacherlogin/${userName}`);
                }
                else{
                    localStorage.setItem('Role', 'Admin');
                    navigate('/details');
                }
            }else{
                console.log("error");
                alert("Username/Password is incorrect.");
            };
        }).catch(error => {
            console.log(error)
        })
    }

    return(
        <div>
            <br/><br/>
            <div className="container">
                <div className="row">
                    <div className="Card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Login</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Name:</label>
                                    <input
                                        type="text" placeholder="Enter your name" name="userName" 
                                        className="form-control" value={userName} onChange={(e)=> onInputChange(e)}></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Password:</label>
                                    <input
                                        type="password" placeholder="Enter your password" name="password" 
                                        className="form-control" value={password} onChange={(e)=> onInputChange(e)}></input>
                                </div>
                                Role:
                                <select class="form-select" aria-label="Default select example" name="role" value={role} onChange={(e) => onInputChange(e)}>
                                    <option value="" selected disabled hidden>Select Role from menu</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Teacher">Teacher</option>
                                    <option value="Student">Student</option>
                                </select>
                                <br/><br/>
                                <button className="btn btn-success" onClick={(e)=>onSubmit(e)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login