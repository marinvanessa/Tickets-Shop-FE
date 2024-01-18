// ViewTickets.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewTickets = ({ event }) => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            const token = sessionStorage.getItem('token');
            if (event && event.eventId) {
                try {
                    const response = await axios.get(`http://localhost:8080/api/v1/getTicketsByEvent/${event.eventId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setTickets(response.data);
                    console.log('Tickets:', response.data);
                } catch (error) {
                    console.error('Error fetching tickets:', error);
                    console.error('Error details:', error.response);
                }
            }
        };


        fetchTickets();
    }, [event]);

    return (
        <div>
            <h1>Tickets Page</h1>
            {/* Renderizați lista de bilete aici */}
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket.id}>
                        {/* Adăugați informațiile despre bilet aici */}
                        {ticket.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewTickets;
