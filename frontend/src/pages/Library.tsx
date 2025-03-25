/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/Library.tsx

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSongs } from '../lib/axios'; // Import the function

const Library = () => {
    const [songs, setSongs] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSongClick = (songId: string) => {
        console.log('Song clicked:', songId);
        navigate(`/song/${songId}`);
    };

    // Fetch songs from the backend when component mounts
    useEffect(() => {
        const getSongs = async () => {
            setLoading(true);
            setError(null);
            try {
                const songsData = await fetchSongs(); // Call the function from api.ts
                setSongs(songsData); // Save songs in the state
            } catch (error: any) {
                setError(error.message || 'Failed to fetch songs');
            } finally {
                setLoading(false);
            }
        };

        getSongs();
    }, []);

    if (songs.length === 0) {
        return (
            <p className="text-white text-center text-xl mt-10">
                No songs found
            </p>
        );
    }

    if (loading)
        return (
            <p className="text-white text-center text-xl mt-10">
                Loading songs...
            </p>
        );
    if (error)
        return (
            <p className="text-red-500 text-center text-xl mt-10">{error}</p>
        );

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-white mb-6">Library</h1>
            <p className="text-zinc-400 text-lg mb-8">Here are some songs:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {songs.map((song) => (
                    <div
                        key={song._id}
                        className="cursor-pointer bg-zinc-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                        onClick={() => handleSongClick(song._id)} // Pass the function reference here
                    >
                        <img
                            src={song.imageUrl}
                            alt={song.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-white font-semibold text-lg mb-2">
                                {song.title}
                            </h2>
                            <p className="text-zinc-400">{song.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Library;
