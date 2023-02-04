import React from "react";
import { json, Link } from 'react-router-dom';


const Admin = () => {
    const auth = localStorage.getItem('user');
    return (
        <div className="admin-wrapp">
            <div className="container-fluid">
                <div className="admin-flex-block d-flex">
                    <div className="admin-sidebar">
                        <div className="user-profile mb-5 gap-top-sm">
                            <h3>Welcome {JSON.parse(auth).name}</h3>
                        </div>
                        <ul>
                            <li> <Link to="/admin">Dashboard</Link></li>
                            <li> <Link to="/add-products">Add Products</Link></li>
                            <li> <Link to="/manage-products">Manage Products</Link></li>
                            <li> <Link to="/update-about-us">Edit About Us</Link></li>
                        </ul>
                    </div>
                    <div className="admin-cnt-wrapp gap-top-sm">
                        <div className="row m-0">
                            <div className="col-md-10 mx-auto">
                                <div className="admin-dashboard-cnt">
                                    <h1>Welcome <span>Again</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;