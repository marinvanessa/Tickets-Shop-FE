import axios from 'axios';

export async function refreshAccessToken(refreshToken) {
    try {
        const response = await axios.post(
            'http://localhost:8080/api/v1/auth/refresh',
            { token: refreshToken },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json'
                }
            }
        );

        const { token: newAccessToken } = response.data;
        if (!newAccessToken) {
            throw new Error("No token or it is not valid.");
        }
        return newAccessToken;
    } catch (error) {
        console.error("Error when refreshing the access token:", error);
        throw error;
    }
}
