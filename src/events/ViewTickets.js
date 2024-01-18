import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from "react-router-dom";
import "../styling/ViewTickets.css";
import addCart from "../components/addCart";
import {isTokenExpired} from "../jwt/jwtUtils";
import {refreshAccessToken} from "../authentification/refreshAccessToken";

const ViewTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [event, setEvent] = useState([]);
    const {eventId} = useParams();
    const userId = sessionStorage.getItem('userId');
    const navigate = useNavigate();


    useEffect(() => {
        const checkTokenExpiration = async () => {
            const accessToken = sessionStorage.getItem('token');
            const refreshToken = sessionStorage.getItem('refreshToken');

            if (accessToken && isTokenExpired(accessToken)) {
                console.log('Token expired');

                if (refreshToken) {
                    try {
                        const newAccessToken = await refreshAccessToken(refreshToken);
                        console.log(newAccessToken)
                        sessionStorage.setItem('token', newAccessToken);
                    } catch (error) {
                        console.error('Error when refreshing the access token:', error);
                        navigate('/login');


                    }
                } else {
                    navigate('/login');
                }
            }
        };


        const fetchTickets = async () => {
            checkTokenExpiration();
            const tokenCheckInterval = setInterval(() => {
                checkTokenExpiration();
            }, 20000);

            const token = sessionStorage.getItem('token');
            const events = JSON.parse(sessionStorage.getItem('events'));
            if (events) {
                setEvent(events.find(currEvent => currEvent.eventId === eventId));
            }
            if (eventId) {
                try {
                    const response = await axios.get(`http://localhost:8080/api/v1/getTicketsByEvent?eventId=${eventId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setTickets(response.data);
                } catch (error) {
                    console.error('Error fetching tickets:', error);
                    console.error('Error details:', error.response);
                }


            }

            return () => clearInterval(tokenCheckInterval);
        };


        fetchTickets();
    }, [eventId, navigate]);

    return (
        <div>
            <h1 style={{textAlign: "center", fontFamily: "Hervetica", padding: "20px"}}>Tickets</h1>
            <link href="https://fonts.googleapis.com/css?family=Cabin|Indie+Flower|Inknut+Antiqua|Lora|Ravi+Prakash"
                  rel="stylesheet"/>
            <div className="container">
                {tickets.map((ticket) => (
                    <div className="item" key={ticket.tickeId}>
                        <div className="item-right">
                            <h2 className="num">{ticket.ticketNumber}</h2>
                            <p className="day">Price</p>
                            <span className="up-border"></span>
                            <span className="down-border"></span>
                        </div>

                        <div className="item-left">
                            <p className="event">Ticket</p>
                            <h2 className="title">{event.name}</h2>

                            <div className="sce">
                                <div className="icon">
                                    <i className="fa fa-table"></i>
                                </div>
                                <p>Ticket number: <br/> {ticket.ticketNumber}</p>
                            </div>
                            <div className="fix"></div>
                            <div className="loc">
                                <div className="icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <p>Location: <br/> {event.location.city}, {event.location.address}, {event.location.isOutdoor
                                    ? 'This event is outdoors!'
                                    : 'This event is not outdoors!'}</p>
                            </div>
                            <div className="fix"></div>
                            <button style={{backgroundColor: "transparent"}} className="tickets">
                                <Link to={`/addCart/${userId}/${ticket.ticketId}`}>Add</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ViewTickets;