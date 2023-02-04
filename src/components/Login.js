import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/admin');
        }
    });


    const handleLogin = async () => {
        console.log(email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        // localStorage.setItem("user", JSON.stringify(result));
        // navigate('/');
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/admin');
        } else {
            alert('Please enter correct details');
        }
    }

    return (
        <div className="login-wrapp">
            <section className="c-form sy-gap">
                <div className="container">
                    <div className="col-md-12">
                        <div className="text-center gap-bottom-sm">
                            <h2>Login Page</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <div className="row">
                                    <div className="col-md-8 mx-auto">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Email <span className="red-text">*</span></label>
                                                    <input type="text"
                                                        onChange={(e) => setEmail(e.target.value)} value={email} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Your Password</label>
                                                    <input type="password"
                                                        onChange={(e) => setPassword(e.target.value)} value={password} />
                                                </div>
                                            </div>
                                            {/* <div className="col-md-12 text-end">
                                                <Link to="/signup">Signup</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button type="button" onClick={handleLogin} className="btn-v btn">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;