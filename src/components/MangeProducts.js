import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageProducts = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProduct(result);

    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
        method: "Delete"
        });
        result = await result.json();
        if(result){
            console.log("Product Deleted");
            getProducts();
        }
    }
    console.warn(product)
    return (
        <>
            <h2>Manage Products</h2>
            <div className="container-fluid gap-top gap-bottom">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                        { 
                                product.map((item, index) =>
                                    <div key={item._id} className="col-md-2 product-block position-relative gap-bottom-sm">
                                        <div className="product">
                                            <div className="p-label orange"></div>
                                            <div className="p-image-block">
                                                <img src="https://www.ikea.com/in/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0614197_pe686822_s5.jpg" alt="" />
                                            </div>
                                            <div className="p-cnt-block pt-5 f-md">
                                                <div className="pb-3">{item.name}</div>
                                                <div className="gray-text">&#8377; <span>{item.price}</span></div>
                                                <button className="btn-v btn sm mt-2" onClick={()=>deleteProduct(item._id)}>Delete</button>
                                                <Link to={"/update-products/"+item._id}>Update</Link>
                                            </div>
                                        </div>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageProducts;