import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../styles/login.css';

const Login = ({ notify, onClose, setIsLoginOpen }) => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [info, setInfo] = useState({})
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()

 
    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.name === 'emailLogin') {
            setEmail(e.target.value)
            console.log(email)
        } else if (e.target.name === 'passLogin') {
            setPass(e.target.value)
            console.log(pass)
        }

    }
    const handleChangeRegister = (e) => {
        e.preventDefault()
        if (e.target.name === 'emailRegister') {
            setEmail(e.target.value)
            console.log(email)
        } else if (e.target.name === 'passRegister') {
            setPass(e.target.value)
            console.log(pass)
        }
        else if (e.target.name === 'nameRegsiter') {
            setName(e.target.value)
            console.log(pass)
        }

    }

    const fetchData = async (e) => {
        e.preventDefault()

        const response = await fetch('http://127.0.0.1:8000/roomrover/login', {
            method: 'POST',
            body: JSON.stringify({
                // Add parameters here
                "email": email,
                "password": pass
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const data = await response.json()
        if (data.success) {
            console.log('logged in')
            notify()
            setIsLoginOpen(false)
            setTimeout(() => {
                navigate('/userProfile')
            }, 2000);
        }
        console.log(data)
        setInfo(data)
    }
    const register = async (e) => {
        e.preventDefault()

        const response = await fetch('http://127.0.0.1:8000/roomrover/signup', {
            method: 'POST',
            body: JSON.stringify({
                // Add parameters here
                "email": email,
                "password": pass,
                "name": name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const data = await response.json()
        if (data.success) {
            console.log('Registered')
            notify()
        }
        console.log(data)
        setInfo(data)
    }



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
                        <input onChange={handleChange} name='emailLogin' value={email} type="email" className="input" placeholder="Email" />
                        <input onChange={handleChange} name='passLogin' value={pass} type="password" className="input" placeholder="Password" />
                        <p className="page-link">
                            <span className="page-link-label">Forgot Password?</span>
                        </p>
                        <button onClick={fetchData} className="form-btn">Log in</button>
                    </form>
                    <p className="sign-up-label">
                        Don't have an account?<span className="sign-up-link" onClick={handleSwitchClick}>Sign up</span>
                    </p>
                </div>
            ) : (
                <div className="form-container">
                    <p className="title">Create account</p>
                    <form className="form">
                        <input type="text" onChange={handleChangeRegister} value={name} name='nameRegister' className="input" placeholder="Name" />
                        <input type="email" onChange={handleChangeRegister} value={email} name='emailRegister' className="input" placeholder="Email" />
                        <input type="password" onChange={handleChangeRegister} value={pass} name='passRegister' className="input" placeholder="Password" />
                        <button onClick={register} className="form-btn">Create account</button>
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
