import React, { useState } from "react";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);


    const addProduct = async () => {
        console.warn(!name);
        if(!name || !price || !category || !description) {
            setError(true);
            return false;
        }
       
        console.log(name, price, category, description);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-product',{
            method: 'post',
            body: JSON.stringify({ name, price, category, description, userId }),
            headers: {
                'Content-type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
    }
    return (
        <>
            <section className="c-form sy-gap">
                <div className="container">
                    <div className="col-md-12">
                        <div className="text-center gap-bottom-sm">
                            <h2>Add Product</h2>
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
                                                onChange={(e)=>{setName(e.target.value)}}
                                                />
                                                { error && !name && <div className="error">Enter Valid name</div>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Product Price</label>
                                                <input type="text" 
                                                value={price}
                                                onChange={(e)=>{setPrice(e.target.value)}}
                                                />
                                                { error && !price && <div className="error">Enter Valid Price</div>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Product Category</label>
                                                <input type="text"
                                                value={category}
                                                onChange={(e)=>{setCategory(e.target.value)}}
                                                />
                                                { error && !category && <div className="error">Enter Valid Category</div>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Product Description</label>
                                                <input type="text" 
                                                value={description}
                                                onChange={(e)=>{setDescription(e.target.value)}}
                                                />
                                                { error && !description && <div className="error">Enter Valid Description</div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="button" onClick={addProduct} className="btn-v btn">Add Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddProduct;