/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

axios.defaults.withCredentials = true;

export const fetchSongs = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/songs');
        return response.data; // Return the data (songs)
    } catch (error: any) {
        throw new Error(error.message || 'Failed to fetch songs');
    }
};

export const fetchSongById = async (id: string) => {
    try {
        const response = await axios.get(
            `http://localhost:5000/api/songs/${id}`
        );
        return response.data; // Return the data (song)
    } catch (error: any) {
        throw new Error(error.message || 'Failed to fetch song');
    }
};

export const fetchAlbums = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/albums');
        return response.data; // Return the data (albums)
    } catch (error: any) {
        throw new Error(error.message || 'Failed to fetch albums');
    }
};

export const fetchAlbumById = async (id: string) => {
    try {
        const response = await axios.get(
            `http://localhost:5000/api/albums/${id}`
        );
        return response.data; // Return the data (album)
    } catch (error: any) {
        throw new Error(error.message || 'Failed to fetch album');
    }
};

export const userRegister = async (
    username: string,
    email: string,
    password: string
) => {
    try {
        const response = await axios.post(
            'http://localhost:5000/api/user/register',
            { username, email, password }
        );
        return response.data; // Return the data (user)
    } catch (error: any) {
        throw new Error(error.message || 'Failed to register');
    }
};

export const userLogin = async (email: string, password: string) => {
    try {
        const response = await axios.post(
            'http://localhost:5000/api/auth/login',
            { email, password }
        );
        return response.data; // Return the data (user)
    } catch (error: any) {
        throw new Error(error.message || 'Failed to login');
    }
};

export const userLogout = async () => {
    try {
        const response = await axios.post(
            'http://localhost:5000/api/auth/logout'
        );
        return response.data; // Return the data (user)
    } catch (error: any) {
        throw new Error(error.message || 'Failed to logout');
    }
};

export const authenticateAdmin = async () => {
    try {
        const response = await axios.get(
            'http://localhost:5000/api/auth/admin'
        );
        return response.data; // Return the data (admin)
    } catch (error: any) {
        throw new Error(error.message || 'Failed to authenticate admin');
    }
};
export const authenticateUser = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/auth');
        return response.data; // Return the data (user)
    } catch (error: any) {
        throw new Error(error.message || 'Failed to authenticate user');
    }
};
