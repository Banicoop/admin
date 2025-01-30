const isTokenExpired = (token: string) => {
    try {
        const [, payload] = token.split('.');
        const { exp } = JSON.parse(atob(payload));
        return Date.now() >= exp * 1000;
    } catch {
        return true;
    }
};

export default isTokenExpired;
