import React from "react";
import { Link,useParams } from "react-router-dom";

const ViewMessage = () =>{
    const { username } = useParams();
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="Card col-md-7 offset-md-3 offset-md-2">
                        <h2 className="text-center">View messages</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Message From:</label>
                                    Teacher
                                </div>
                                <div classname="form-floating">
                                    <label className="form-label">Comments/Message:</label>
                                    message
                                </div>
                                <button type="button" className="btn btn-secondary">View</button>
                                <Link as={Link} to={`/teacherlogin/${username}`}><button type="button" className="btn btn-secondary">Cancel</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewMessage