import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Register from '../authentification/register';
import '../styling/login.css';
import mello from '../images/mello.svg';

async function login(username, password, navigate) {

    try {

        axios.post('http://localhost:8080/users/getUserByUsernameAndPassword',
            {
                "username": username,
                "password": password
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json'
                }
            }
        ).then(res => {
                console.log(res);
                let loginToken = res.data;
                sessionStorage.setItem('loginToken', loginToken);
                sessionStorage.setItem('username', username);
                navigate("/home");
                // window.location.replace('http://localhost:3000/home');

            }
        )
    } catch (error) {
        console.error(error.response.data);
    }
}

export default function Login() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await login(username, password, navigate);
    }


    return (
        <body className={"login-main-page"}>
        <h1 className={"mess"} style={{color: "#baab6a"}}>TicketFest</h1>
        <img className={"mello"} src={mello} alt="mello"/>
        <div className={"login-box"}>
            <div className={"title-img"}>
                <h1>Login</h1>
            </div>
            <form className={"login-form"} method={"post"} onSubmit={handleSubmit}>
                <div className={"txt-field"}>
                    <span></span>
                    <input type={"text"} onChange={e => setUsername(e.target.value)} required={true}/>
                    <label>Username:</label>
                </div>
                <div className={"txt-field"}>
                    <span></span>
                    <input type={"password"} onChange={e => setPassword(e.target.value)} required={true}/>
                    <label>Password:</label>
                </div>
                <button className={"login-button"} type={"submit"}>Login</button>
                <div className={"signup-link"}>New user?<Register/></div>
            </form>
        </div>
        </body>
    )
}