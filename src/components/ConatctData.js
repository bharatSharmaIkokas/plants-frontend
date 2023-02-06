import React, { useEffect, useState } from "react";
import { json, Link } from 'react-router-dom';


const ConatctData = () => {
    const auth = localStorage.getItem('user');
    const [contact, setContact] = useState([]);
    useEffect(() => {
        getContactData();
    }, []);
    const getContactData = async () => {
        let result = await fetch('http://localhost:5000/contact', {
            headers: {
                authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setContact(result);

    }

    const deleteData = async (id) => {
        let result = await fetch(`http://localhost:5000/contact/${id}`, {
            method: "Delete", 
            headers: {
                authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if (result) {
            console.log("Conatct Deleted");
            getContactData();
        }
    }
    console.warn(contact)
    let name = "Manage Conatct"
    return (
        <>
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
                                <li> <Link to="/conatct-data">Contact Data</Link></li>
                            </ul>
                        </div>
                        <div className="admin-cnt-wrapp gap-top-sm">
                            <div className="row m-0">
                                <div className="col-md-10 mx-auto">
                                    <div className="table-responsive">
                                        <table>
                                            <tr>
                                                <th>S.no</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Message</th>
                                                <th>Action</th>
                                            </tr>
                                            {
                                                contact.map((item, index) =>
                                                    <tr key={item._id}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td><span>{item.message}</span></td>
                                                        <td>
                                                            <Link onClick={() => deleteData(item._id)}><i className="fa-solid fa-trash"></i></Link>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConatctData;