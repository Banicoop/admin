import { jwtDecode } from 'jwt-decode';

export const getTokenExpirationTime = (token: string | null): number | null => {
    if (!token || typeof token !== 'string') {
        console.warn('Invalid or missing token');
        return null; 
    }

    try {
        const decoded: { exp: number } = jwtDecode(token);
        return decoded.exp * 1000; 
    } catch (error) {
        console.error('Error decoding token:', error);
        return null; 
    }
};
