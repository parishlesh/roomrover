import React, { useState } from 'react';
import styles from '../styles/login.css';

const Login = (props) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleLoginClick = () => {
        setIsToggled(false);
    };

    const handleSwitchClick = () => {
        setIsToggled(true);
    };

    return (
        <div className='formModal' style={{ display: 'block' }}>
            {isToggled ? (
                <div className="form-container">
                    {/* Signup form */}
                    <p className="title">Create account</p>
                    <p className="sub-title">Let's get started with your 30 days free trial</p>
                    <form className="form">
                        <input type="text" className="input" placeholder="Name" />
                        <input type="email" className="input" placeholder="Email" />
                        <input type="password" className="input" placeholder="Password" />
                        <button className="form-btn">Create account</button>
                    </form>
                    <p className="sign-up-label">
                        Already have an account?<span className="sign-up-link" onClick={handleLoginClick}>Log in</span>
                    </p>
                </div>
            ) : (
                <div className="form-container">
                    {/* Login form */}
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
            )}
        </div>
    );
};

export default Login;
