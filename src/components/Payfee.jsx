import React from "react";
import {Link} from "react-router-dom";

const Payfee = () =>{
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
                                <label className="form-label">..</label>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">UserName:</label>
                                <label className="form-label">..</label>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Amount:</label>
                                <label className="form-label">..</label>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Status:</label>
                                <label className="form-label">..</label>
                            </div>
                            <br/>
                            <button type="button" className="btn btn-secondary">Pay</button>
                            <Link to='/studentlogin'><button type="button" className="btn btn-secondary">Cancel</button></Link>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Payfee