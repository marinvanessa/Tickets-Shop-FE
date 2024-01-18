// EventTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styling/ViewEvents.css";
import Logout from "../authentification/logout";
import {Link, useNavigate} from 'react-router-dom';
import tickets from "./Tickets";

const MovieCard = ({ event }) => {
    const history = useNavigate();

    const handleRedirect = (eventId) => {
        history(`/tickets/${eventId}`);
    };

    return (
        <div key={event.eventId} className="movie_card" id={event.eventId}>
            <div className="info_section">
                <div className="movie_header">
                    <h1>{event.name}</h1>
                    <span className="minutes">{event.date} </span>
                </div>
                <div className="movie_desc">
                    <p className="text">
                        {event.description}
                    </p> <br />
                    <p className="text">
                        {event.location && (
                            <span>
                <span className="text">
                  {event.location.city}, {event.location.address},{' '}
                </span>
                <span className="text">
                  {event.location.isOutdoor
                      ? 'This event is outdoors!'
                      : 'This event is not outdoors!'}
                </span>
              </span>
                        )}
                    </p>
                </div>
                <div className="movie_social">
                    <ul>
                        <li>
                            <Link to={`/tickets/${event.eventId}`}>Tickets</Link>
                            {/*<i onClick={() => handleRedirect(event.eventId)}>aa</i>*/}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="blur_back ave_back"></div>
        </div>
    );
};

const EventTable = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/auth/getAllEvents');
                setEvents(response.data);
                sessionStorage.setItem("events", JSON.stringify(response.data));
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: "center", fontFamily: "Hervetica", marginBottom: "20px"}}>Concerts & Festivals</h1>
            <div className={"floating-button-container"}><Logout /></div>
            {events.map((event) => (<MovieCard key={event.id} event={event} />))}

        </div>
    );
};

export default EventTable;
