/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

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
        ); // Replace with your API endpoint
        return response.data; // Return the data (song)
    } catch (error: any) {
        throw new Error(error.message || 'Failed to fetch song');
    }
};

export const fetchAlbumById = async (id: string) => {
    try {
        const response = await axios.get(
            `http://localhost:5000/api/albums/${id}`
        ); // Replace with your API endpoint
        return response.data; // Return the data (album)
    } catch (error: any) {
        throw new Error(error.message || 'Failed to fetch album');
    }
};
