import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';



const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=> {
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/');
        }
    });

    const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch('http://localhost:5000/signup', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/');
    }

    return (
        <div>
            <section className="c-form sy-gap">
                <div className="container">
                    <div className="col-md-12">
                        <div className="text-center gap-bottom-sm">
                            <h2>Signup</h2>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-md-8 mx-auto">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Full Name <span className="red-text">*</span></label>
                                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Email <span className="red-text">*</span></label>
                                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Your Password</label>
                                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <button type="button" onClick={collectData} className="btn-v btn">Signup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup;