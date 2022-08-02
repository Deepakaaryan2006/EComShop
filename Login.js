import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [User_Name, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('userData');
        if (auth) {
            navigate('/');
        }
    }, []);
    const handleLogin = async () => {
        let result = await fetch('http://localhost:5000/signin', {
            method: 'Post',
            body: JSON.stringify({ User_Name, Password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();

        console.warn(result);
        if (result.Name) {
            localStorage.setItem("userData", JSON.stringify(result));
            navigate('/');
        } else {
            alert("Please enter a valid user");
        }
    }
    return (
        <div className="login">
            <h1>Sign In</h1>
            <input className='inputBox' type="text" value={User_Name}
                onChange={(e) => setUserName(e.target.value)} placeholder='Enter User Name' />
            <input className='inputBox' type="password" value={Password}
                onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
            <button onClick={handleLogin} className='appButton' type='button' >Login</button>
        </div>
    )

}

export default Login;