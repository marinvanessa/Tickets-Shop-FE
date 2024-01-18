import React, { useEffect } from 'react';
import '../styling/home.css';
import { useNavigate } from 'react-router-dom';
import Logout from '../authentification/logout';
import { isTokenExpired } from '../jwt/jwtUtils';
import { refreshAccessToken } from '../authentification/refreshAccessToken';

export default function Home() {
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
                        sessionStorage.setItem('token', newAccessToken);
                    } catch (error) {
                        console.error('Error when refreshing the access token:', error);
                        navigate('/');
                    }
                } else {
                    navigate('/');
                }
            }
        };

        checkTokenExpiration();

        const intervalId = setInterval(checkTokenExpiration, 2000);

        return () => clearInterval(intervalId);
    }, [navigate]);

    return (
        <div className={'home-page'}>
            <h1>TicketFest</h1>
            <div className={'bttn-log'}><Logout /></div>
        </div>
    );
}
