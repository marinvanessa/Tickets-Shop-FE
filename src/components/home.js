import React from 'react';
import '../styling/home.css';
import {useNavigate} from "react-router-dom";
import Logout from '../authentification/logout';

export default function Home() {

    const navigate = useNavigate();

    function handleClick() {
        window.location.replace("/");
    }

    return (
        <div className={"home-page"}>
            <h1>TicketFest</h1>
            <div className={"bttn-log"}><Logout/></div>

        </div>

    )
}