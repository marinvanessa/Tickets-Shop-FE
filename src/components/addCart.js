import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios, {post} from "axios";

const AddCart = () => {
    const {ticketId} = useParams();

    const userId = sessionStorage.getItem('userId');
    console.log("User: ", userId);
    console.log(ticketId)
    const handleAddToCart = () => {
        axios.post(`http://localhost:8080/api/v1/user/addTicketToCart?userId=${userId}&ticketId=${ticketId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Eroare:', error);
                console.error('Error details:', error.response);
            });
    };

    return (
        <button
            style={{backgroundColor: 'transparent'}}
            className="tickets"
            onClick={handleAddToCart}
        >
            <Link to={`/addCart/${userId}/${ticketId}`}>Add</Link>
        </button>
    );
};

export default AddCart;
