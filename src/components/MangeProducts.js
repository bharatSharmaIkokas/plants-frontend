import React, { useEffect, useState } from "react";
import { json, Link } from 'react-router-dom';


const ManageProducts = () => {
    const auth = localStorage.getItem('user');
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
        if (result) {
            console.log("Product Deleted");
            getProducts();
        }
    }
    console.warn(product)
    let name = "Manage Products"
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
                            </ul>
                        </div>
                        <div className="admin-cnt-wrapp gap-top-sm">
                            <div className="row m-0">
                                <div className="col-md-10 mx-auto">
                                    <div className="table-responsive">
                                        <table>
                                            <tr>
                                                <th>S.no</th>
                                                <th>Product Image</th>
                                                <th>Product Name</th>
                                                <th>Category</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                            {
                                                product.map((item, index) =>
                                                    <tr key={item._id}>
                                                        <td>{index + 1}</td>
                                                        <td className="p-table-img"><img src="img/pc-1.jpg" alt="" /></td>
                                                        <td>{item.name}</td>
                                                        <td>{item.category}</td>
                                                        <td>&#8377; <span>{item.price}</span></td>
                                                        <td>
                                                            <Link to={"/update-products/" + item._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                                            <Link onClick={() => deleteProduct(item._id)}><i className="fa-solid fa-trash"></i></Link>
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

export default ManageProducts;