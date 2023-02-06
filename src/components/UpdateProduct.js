import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const auth = localStorage.getItem('user');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = async () => {
        console.warn(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            headers: {
                authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setDescription(result.description);
    }

    const updateProduct = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: "Put",
            body: JSON.stringify({ name, price, category, description }),
            headers: {
                'Content-Type': "application/json",
                authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });

        result = await result.json();
        console.warn(result);
        navigate('/our-products');
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
                                                        <label>Product Name <span className="red-text">*</span></label>
                                                        <input type="text"
                                                            value={name}
                                                            onChange={(e) => { setName(e.target.value) }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Product Price</label>
                                                        <input type="text"
                                                            value={price}
                                                            onChange={(e) => { setPrice(e.target.value) }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Product Category</label>
                                                        <input type="text"
                                                            value={category}
                                                            onChange={(e) => { setCategory(e.target.value) }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Product Description</label>
                                                        <input type="text"
                                                            value={description}
                                                            onChange={(e) => { setDescription(e.target.value) }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <button type="button" onClick={updateProduct} className="btn-v btn">Update Product</button>
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

export default UpdateProduct;