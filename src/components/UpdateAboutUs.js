import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';


const UpdateAbouUs = () => {
    const auth = localStorage.getItem('user');
    const [subTile, setSubTile] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getAboutData();
    }, []);

    const getAboutData = async () => {
        console.warn(params);
        let result = await fetch('http://localhost:5000/about', {
            headers: {
                authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setTitle(result.title);
        setSubTile(result.subTile);
        setDescription(result.description);
    }

    const updateAboutData = async () => {
        let result = await fetch('http://localhost:5000/about/63db9bdc47827b20e47bdbe4', {
            method: "Put",
            body: JSON.stringify({ subTile, title, description }),
            headers: {
                'Content-Type': "application/json",
                authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });

        result = await result.json();
        console.warn(result);
        navigate('/about-us');
    }

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
                                    <div className="row m-0">
                                        <div className="col-md-8 mx-auto">
                                            <div className="row m-0">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Title <span className="red-text">*</span></label>
                                                        <input type="text"
                                                            value={title}
                                                            onChange={(e) => { setTitle(e.target.value) }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Sub Title <span className="red-text">*</span></label>
                                                        <input type="text"
                                                            value={subTile}
                                                            onChange={(e) => { setSubTile(e.target.value) }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Description <span className="red-text">*</span></label>
                                                        <input type="text"
                                                            value={description}
                                                            onChange={(e) => { setDescription(e.target.value) }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <button type="button" onClick={updateAboutData} className="btn-v btn">Update Now</button>
                                        </div>
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

export default UpdateAbouUs;