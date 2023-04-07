import React from "react";
import {useNavigate, useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from "../assets/schoollogo.jpg";

const Navbar=()=>{
    const auth = localStorage.getItem('Role');
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear()
        navigate('/');
    }
    return(
        <>
        {
            (auth=='Student'|| auth=='Teacher'||auth=='Admin')?
            <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
                <div class="container-fluid">
                    <Link to="/"><img src={logo} alt="schoollogo" height="100" width="100"/>ABC public School</Link>
                    {(auth=='Admin')?
                    <a class="navbar-brand" >Admin Login</a>:
                    (auth=='Student')?
                    <a class="navbar-brand" >Student Login</a>:
                    <a class="navbar-brand" >Teacher Login</a>}
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
                        {(auth=='Student')?
                        <Link class="nav-link" as={Link} to={`/studentlogin/profile`}>Profile</Link>:
                        (auth=='Teacher')?
                        <Link class="nav-link" as={Link} to={`/teacherlogin/profile`}>Profile</Link>:
                        <></>}
                        <a class="nav-link" onClick={logout}>Logout</a>
                    </div>
                    </div>
                </div>
            </nav>:
            <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
            <div class="container-fluid">
                <Link to="/"><img src={logo} alt="schoollogo" height="100" width="100"/>ABC public School</Link>
                <a class="navbar-brand">Student web App</a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    {/* <a class="nav-link" href="/signup">Sign up</a> */}
                    <a class="nav-link" href="/login">Login</a>
                </div>
                </div>
            </div>
        </nav>
        }
        </>
    )
}
export default Navbar