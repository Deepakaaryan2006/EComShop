import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [Name, setName] = useState("");
    const [User_Name, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('userData');
        if (auth) {
            navigate('/');
        }
    },[])

    const collectData = async () => {
        //console.warn(Name, User_Name, Email, Password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'Post',
            body: JSON.stringify({ Name, User_Name, Email, Password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        localStorage.setItem("userData", JSON.stringify(result));
        if (result) {

            navigate('/');
        }
    }
    return (
        <div className='register'>
            <h1>Register</h1>
            <input className='inputBox' type="text"
                value={Name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />

            <input className='inputBox' type="text"
                value={User_Name} onChange={(e) => setUserName(e.target.value)} placeholder='Enter User Name' />

            <input className='inputBox' type="text"
                value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter E-Mail' />

            <input className='inputBox' type="password"
                value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />

            <button className='appButton' type='button' onClick={collectData}>Sign Up</button>
        </div>
    )
}

export default SignUp;