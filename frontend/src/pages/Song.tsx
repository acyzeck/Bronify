import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSongById } from '../lib/axios';

const Song = () => {
    const { id } = useParams();
    const [song, setSong] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getSong = async () => {
            setLoading(true);
            setError(null);
            try {
                const fetchedSong = await fetchSongById(id!);
                setSong(fetchedSong);
            } catch (error: any) {
                setError(error.message || 'Failed to fetch song');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            getSong();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-white text-2xl">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen text-red-500 text-2xl">
                <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    Error: {error}
                </p>
            </div>
        );
    }

    if (!song) {
        return (
            <div className="flex justify-center items-center h-screen text-white text-2xl">
                <p className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
                    No song found
                </p>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-purple-600/40 via-zinc-900 to-black min-h-screen text-white p-8 rounded-md overflow-auto max-h-screen">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col md:flex-row items-center md:items-end space-y-6 md:space-y-0 md:space-x-8 mb-12">
                    <img
                        src={song.imageUrl}
                        alt={song.title}
                        className="w-64 h-64 object-cover shadow-2xl rounded-md transition-transform duration-300 hover:scale-105"
                    />
                    <div>
                        <h1 className="text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            {song.title}
                        </h1>
                        <p className="text-3xl text-gray-300 mb-2">
                            {song.artist}
                        </p>
                        {song.album && (
                            <p className="text-xl text-gray-400">
                                Album: {song.album}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mb-12">
                    <audio controls className="w-full bg-zinc-800 rounded-full">
                        <source src={song.audioUrl} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-4 text-purple-300">
                        About this track
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {song.description ||
                            'No description available for this track.'}
                    </p>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-24 ">
                    <h2 className="text-3xl font-semibold mb-4 text-purple-300">
                        Lyrics
                    </h2>
                    <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                        {song.lyrics || 'No lyrics available for this track.'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Song;
