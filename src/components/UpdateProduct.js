import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
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
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
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
                'Content-Type': "application/json"
            }
        });

        result = await result.json();
        console.warn(result);
        navigate('/our-products');
    }
    return (
        <>
            <section className="c-form sy-gap">
                <div className="container">
                    <div className="col-md-12">
                        <div className="text-center gap-bottom-sm">
                            <h2>Update Product</h2>
                        </div>
                        <div className="row">
                            <div className="row">
                                <div className="col-md-8 mx-auto">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Product Name <span className="red-text">*</span></label>
                                                <input type="text"
                                                    value={name}
                                                    onChange={(e) => { setName(e.target.value) }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Product Price</label>
                                                <input type="text"
                                                    value={price}
                                                    onChange={(e) => { setPrice(e.target.value) }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Product Category</label>
                                                <input type="text"
                                                    value={category}
                                                    onChange={(e) => { setCategory(e.target.value) }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
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
            </section>
        </>
    )
}

export default UpdateProduct;