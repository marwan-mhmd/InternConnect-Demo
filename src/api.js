const BASE_URL = 'http://localhost:3000';

export const loginUser = async (email, password) => {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    });
    return response.json();
};