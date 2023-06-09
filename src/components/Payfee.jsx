import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Payfee = () =>{
    const userName = localStorage.getItem('Name');

    const[fees,setFees] = useState({ 
        name: "", 
        amount : "",
        email:"",
        status:"pending",
        date:""
    });

    useEffect(()=>{
        loadUser();
    });

    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8083/usecase/student/payfee/${userName}`);
        setFees(result.data);
    };

    const payfee = async() =>{
        // alert("payment complete");
        console.log(fees.status);
        setFees(fees.status="paid");
        console.log(fees.status);
    }
    return(
        <>
        <br/>
        <div className="container">
            <div className="row">
                <div className="Card col-md-7 offset-md-3 offset-md-2">
                    <h2 className="text-center">Fee Payment</h2>
                    <br/>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Name:</label>
                                <label className="form-label">{fees.name}</label>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">UserName:</label>
                                <label className="form-label">{userName}</label>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Amount:</label>
                                <label className="form-label">{fees.amount}</label>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Status:</label>
                                <label className="form-label">{fees.status}</label>
                            </div>
                            <br/>
                            <button type="button" className="btn btn-secondary" onClick={(e)=> payfee(e)}>Pay</button>
                            <Link to={`/studentlogin/${userName}`}><button type="button" className="btn btn-secondary">Cancel</button></Link>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Payfee