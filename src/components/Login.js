import React, { useState } from 'react';
import '../styles/login.css';

const Login = ({ onClose }) => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const handleSwitchClick = () => {
        setIsLoginForm(!isLoginForm);
    };

    const handleCloseClick = () => {
        onClose();
    };

    return (
        <div className='formModal' style={{ display: 'block' }}>
            <button className='closeButton' onClick={handleCloseClick}>X</button>

            {isLoginForm ? ( 
                <div className="form-container">
                    <p className="title">Welcome back</p>
                    <form className="form">
                        <input type="email" className="input" placeholder="Email" />
                        <input type="password" className="input" placeholder="Password" />
                        <p className="page-link">
                            <span className="page-link-label">Forgot Password?</span>
                        </p>
                        <button className="form-btn">Log in</button>
                    </form>
                    <p className="sign-up-label">
                        Don't have an account?<span className="sign-up-link" onClick={handleSwitchClick}>Sign up</span>
                    </p>
                </div>
            ) : (
                <div className="form-container">
                    <p className="title">Create account</p>
                    <form className="form">
                        <input type="text" className="input" placeholder="Name" />
                        <input type="email" className="input" placeholder="Email" />
                        <input type="password" className="input" placeholder="Password" />
                        <button className="form-btn">Create account</button>
                    </form>
                    <p className="sign-up-label">
                        Already have an account?<span className="sign-up-link" onClick={handleSwitchClick}>Log in</span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Login;
