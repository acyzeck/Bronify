/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchAlbumById } from '../lib/axios';

const Album = () => {
    const { id } = useParams();
    const [album, setAlbum] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAlbum = async () => {
            setLoading(true);
            setError(null);
            try {
                const fetchedAlbum = await fetchAlbumById(id!);
                setAlbum(fetchedAlbum);
            } catch (error: any) {
                setError(error.message || 'Failed to fetch album');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            getAlbum();
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

    if (!album) {
        return (
            <div className="flex justify-center items-center h-screen text-white text-2xl">
                <p className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
                    No album found
                </p>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-purple-600/40 via-zinc-900 to-black min-h-screen text-white p-8 rounded-md overflow-auto max-h-screen">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col md:flex-row items-center md:items-end space-y-6 md:space-y-0 md:space-x-8 mb-12">
                    <img
                        src={album.imageUrl}
                        alt={album.title}
                        className="w-64 h-64 object-cover shadow-2xl rounded-md transition-transform duration-300 hover:scale-105"
                    />
                    <div>
                        <h1 className="text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            {album.title}
                        </h1>
                        {album.artist && (
                            <p className="text-3xl text-gray-300 mb-2">
                                {album.artist}
                            </p>
                        )}
                    </div>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-4 text-purple-300">
                        Songs in this Album
                    </h2>
                    {album.songs.length > 0 ? (
                        <ul className="space-y-4">
                            {album.songs.map((song: any) => (
                                <li
                                    key={song._id}
                                    className="flex items-center space-x-4 p-4 bg-zinc-900 rounded-lg shadow-md"
                                >
                                    <Link to={`/song/${song._id}`}>
                                        <img
                                            src={song.imageUrl}
                                            alt={song.title}
                                            className="w-16 h-16 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                                        />
                                    </Link>
                                    <div>
                                        <p className="text-xl font-semibold">
                                            {song.title}
                                        </p>
                                        <p className="text-gray-400">
                                            {song.artist}
                                        </p>
                                    </div>
                                    <audio controls className="ml-auto">
                                        <source
                                            src={song.audioUrl}
                                            type="audio/mp3"
                                        />
                                        Your browser does not support the audio
                                        element.
                                    </audio>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400">
                            No songs found in this album.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Album;
