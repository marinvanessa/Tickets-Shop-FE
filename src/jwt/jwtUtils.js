
export function isTokenExpired(token) {
    if (!token) {
        return true;
    }

    const decodedToken = parseJwt(token);

    if (!decodedToken || !decodedToken.exp) {
        return true;
    }

    const expirationTime = decodedToken.exp * 1000;
    const currentTime = Date.now();

    return currentTime > expirationTime;
}

function parseJwt(token) {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}
