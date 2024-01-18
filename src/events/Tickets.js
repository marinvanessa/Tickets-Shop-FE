// Ticket.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ticket = ({ eventId }) => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/auth/getTicketsByEvent?eventId=${eventId}`);
                setTickets(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, [eventId]);

    return (
        <div>
            <h1>Tickets for Event</h1>
            {tickets.map((ticket) => (
                <div key={ticket.id}>
                    <p>Ticket ID: {ticket.id}</p>
                </div>
            ))}
        </div>
    );
};

export default Ticket;
