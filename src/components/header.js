import React, { useEffect } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    const Mailto = ({ email, ...props }) => {
        return (
            <a href={`mailto:${email}`}>
                {props.children}
            </a>
        );
    }

    const Tell = ({ number, ...props }) => {
        return (
            <a href={`tel:${number}`}>
                {props.children}
            </a>
        );
    }
    return (
        <div>
            <header>
                <div className="container-fluid">
                    <Link className="logo" to="/">
                        <img src="img/logo.svg" alt="Logo" />
                    </Link>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/about-us">About Us</Link></li>
                        <li> <Link to="/our-products">Our Products</Link></li>

                        <li> <Link to="/contact-us">Contact Us</Link></li>
                        {
                            auth ?
                                <>
                                    {/* <li> <Link to="/add-products">Add Products</Link></li>
                            <li> <Link to="/manage-products">Manage Products</Link></li> */}
                                    <li> <Link to="/admin">Dashboard</Link></li>
                                    <li><Link to="/login" onClick={logout}>Log Out</Link></li>
                                </>
                                :
                                <>

                                    <li> <Link to="/login">Login</Link></li>
                                </>
                        }
                    </ul>
                    <ul className="contacts">
                        <li>
                            <Tell number="9898989898">
                                <i className="fa-solid fa-phone"></i>
                            </Tell>
                        </li>
                        <li>
                            <Mailto email="ask@junglegrooming.com">

                                <i className="fa-solid fa-envelope"></i>
                            </Mailto>
                        </li>

                    </ul>
                </div>
            </header>
        </div>
    )

}

export default Nav;