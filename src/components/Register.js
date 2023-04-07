// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AdminService from "../services/AdminService";

// const StaffLogin = () => {
//     const[userName,setUsername]=useState('');
//     const[name,setName]=useState('');
//     const[email,setEmail]=useState('');
//     const[role,setRole]=useState('admin');
//     const[password,setPassword]=useState('');

//     const navigate = useNavigate();
//     const saveperson = (e)=>{
//         e.preventDefault();

//         const person = {userName,name,role,email,password}
//         AdminService.createPerson(person).then(()=>{
//             alert("registered successfully");
//             navigate('/login');
//         }).catch(error =>{
//             console.log(error)
//         })
//     }

//     return(
//         <>
//             <div className="container">
//                 <div className="row">
//                     <div className="Card col-md-6 offset-md-3 offset-md-3">
//                         <h2 className="text-center">Register</h2>
//                         <div className="card-body">
//                             <form>
//                                 <div className="form-group mb-2">
//                                     <label className="form-label">Name:</label>
//                                     <input
//                                         type="text" placeholder="Enter your name" name="name" 
//                                         className="form-control" value={name} onChange={(e)=> setName(e.target.value)}></input>
//                                 </div>
//                                 <div className="form-group mb-2">
//                                     <label className="form-label">Email:</label>
//                                     <input
//                                         type="email" placeholder="Enter your email" name="email" 
//                                         className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
//                                 </div>
//                                 Role:
//                                 <div class="form-check form-check-inline">
//                                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="student" onChange={(e)=> setRole(e.target.value)}/>
//                                     <label class="form-check-label" for="inlineRadio1">Student</label>
//                                 </div>
//                                 <div class="form-check form-check-inline">
//                                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="teacher" onChange={(e)=> setRole(e.target.value)}/>
//                                     <label class="form-check-label" for="inlineRadio2">Teacher</label>
//                                 </div>
//                                 <div className="form-group mb-2">
//                                     <label className="form-label">UserName:</label>
//                                     <input
//                                         type="text" placeholder="Enter your name" name="Name" 
//                                         className="form-control" value={userName} onChange={(e)=> setUsername(e.target.value)}></input>
//                                 </div>
//                                 <div className="form-group mb-2">
//                                     <label className="form-label">Password:</label>
//                                     <input
//                                         type="password" placeholder="ReEnter your password" name="password" 
//                                         className="form-control w-60" value={password} onChange={(e) => setPassword(e.target.value)}></input>
//                                 </div>
//                                 <button className="btn btn-success" onClick={(e)=>saveperson(e)}>Submit</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default StaffLogin