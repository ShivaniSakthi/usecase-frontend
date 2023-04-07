import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link,useParams} from "react-router-dom";
import axios from "axios";

const DropMessage = () => {
    const { username } = useParams();

    const navigate = useNavigate();
    const [messages, setMessages] = useState({
        message:"",
        studentName:username,
        teacherName:"",
    });
    
    const{message,teacherName,studentName}=messages;
    
    const onInputChange=(e)=>{
        setMessages({...messages,[e.target.name]:e.target.value})
    }

    const saveperson = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8083/usecase/student/message",messages);
        alert("data added successfully");
        navigate(`/studentlogin/${username}`);
        // StudentService.saveStudent(user).then(() => {
        //     
        // }).catch(error => {
        //     console.log(error)
        // })
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="Card col-md-7 offset-md-3 offset-md-2">
                        <h2 className="text-center">Drop a message to the teacher</h2>
                        <div className="card-body">
                            <form>
                            <label className="form-label">Message From:{studentName}</label>
                                <div className="form-group mb-2">
                                    <label className="form-label">Message To:</label>
                                    <input
                                        type="text" className="addforminput" placeholder="Enter Teacher Name" name="teacherName"
                                        value={teacherName} onChange={(e) => onInputChange(e)}></input>
                                </div>
                                <div classname="form-floating">
                                    <label className="form-label">Comments/Message:</label>
                                    <textarea className="form-control textbox w-50" placeholder="Leave a comment here"
                                    name="message" value={message} onChange={(e) => onInputChange(e)}></textarea>
                                </div>
                                {/* <div classname="form-floating">
                                    <label className="form-label">Comments/Message:</label>
                                    <textarea className="form-control textbox w-50" name="messagetext" value={messagetext} onChange={(e) => onInputChange(e.target.value)}
                                    placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                                </div> */}
                                {/* <button type="button" className="btn btn-secondary" onClick={saveperson}>Send</button> */}
                                <button type="button" className="btn btn-secondary" onClick= {(e) => saveperson(e)}>Send</button>
                                <Link as={Link} to={`/studentlogin/${username}`}><button type="button" className="btn btn-secondary">Cancel</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DropMessage