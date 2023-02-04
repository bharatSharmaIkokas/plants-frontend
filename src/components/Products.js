import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import IpBanner from "./IpBanner";

const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProduct(result);

    }
    console.warn(product)
    let name = "Our Products";
    return (
        <>
            <IpBanner name={name} />
            <div className="container-fluid gap-top gap-bottom">
                <div className="row gx-5">
                    <div className="col-md-3">
                        <h4 className="fw-bold">Filter By Search</h4>
                        <div className="filter-block mt-4 gap-bottom-sm">
                            <input type="search" placeholder="serch..." />
                        </div>
                        <h4 className="fw-bold">Filter By Category</h4>
                        <div className="filter-block mt-4">
                            <div className="checkbox">
                                <input type="checkbox" id="check_1" />
                                <label for="check_1">Air Purifying</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" id="check_2" />
                                <label for="check_2">Ceramic Pots
                                </label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" id="check_3" />
                                <label for="check_3">Herb Seeds
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {
                                product.map((item, index) =>
                                    <div key={item._id} className="col-md-3 product-block position-relative gap-bottom-sm">
                                        <Link to={"/product-detail/" + item._id}>
                                        <div className="product">
                                            <div className="p-label orange"></div>
                                            <div className="p-image-block sm">
                                                <img src="img/pc-1.jpg" alt="" />
                                            </div>
                                            <div className="p-cnt-block pt-5 f-md">
                                                <div className="pb-3">{item.name}</div>
                                                <div className="gray-text">&#8377; <span>{item.price}</span></div>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products;