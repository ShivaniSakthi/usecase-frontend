import React,{useState} from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
// import StudentService from "../services/StudentService";
import axios from 'axios';

const Applyleave = () =>{

    const navigate = useNavigate();
    const { username } = useParams();
    
    const [leave, setLeave] = useState({
        studentname:username,
        // studentid:"",
        teachername:"",
        reason:"",
        leavefrom:"",
        leaveto:"",
        totalleave:""
    });

    const{studentname,teachername,reason,leavefrom,leaveto,totalleave}=leave;
    const onInputChange=(e)=>{
        setLeave({...leave, [e.target.name]:e.target.value});
    }
    
    // const leavedetails = {teachername,reason,leavefrom,totalleave};

    const applyleaves = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8083/usecase/student/applyleave",leave);
        alert("data added successfully");
        navigate('/studentlogin/:username');
        // StudentService.applyleave(leavedetails).then((response) => {
        //     console.log(response.data)
        // }).catch(error => {
        //     console.log(error)
        // })
    }

    const currentDate=new Date().toISOString().slice(0,10);
    return(
        <>
        <br/>
        <div className="container">
            <div className="row">
                <div className="Card col-md-7 offset-md-3 offset-md-2">
                    <h2 className="text-center">Apply leave</h2>
                    <div className="card-body">
                        <form>
                            <label className="form-label">From:{studentname}</label>
                            <div className="form-group mb-2">
                                <label className="form-label">From:</label>
                                <input
                                    type="date" className="addforminput" placeholder="From date" name="leavefrom"
                                    min={currentDate} value={leavefrom} onChange={(e) => onInputChange(e)}></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">To:</label>
                                <input
                                    type="date" className="addforminput" placeholder="To date" name="leaveto"
                                    min={currentDate} value={leaveto} onChange={(e) => onInputChange(e)}></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Reason:</label>
                                <input
                                    type="text" className="addforminput" placeholder="Enter your Reason" name="reason"
                                    value={reason} onChange={(e) => onInputChange(e)}></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Number of days:</label>
                                <input
                                    type="number" className="addforminput" placeholder="days" name="totalleave"
                                    value={totalleave} onChange={(e) => onInputChange(e)}></input>
                            </div>   
                            <div className="form-group mb-2">
                                <label className="form-label">Apply to:</label>
                                <input
                                    type="text" className="addforminput" placeholder="Enter your teacher name" name="teachername"
                                    value={teachername} onChange={(e) => onInputChange(e)}></input>
                            </div>    
                            <label className="form-label">Status:</label><br/>                    
                            <button type="button" className="btn btn-secondary" onClick={(e) => applyleaves(e)}>Send</button>
                            <Link as={Link} to={`/studentlogin/${username}`}><button type="button" className="btn btn-secondary">Cancel</button></Link>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Applyleave