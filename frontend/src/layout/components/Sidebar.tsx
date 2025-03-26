import { useState, useEffect } from 'react';
import { Library } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { fetchAlbums } from '../../lib/axios';

// Define the type for an album
interface Album {
    _id: string;
    title: string;
    imageUrl: string;
}

const Sidebar = () => {
    // Set the type for the albums state
    const [albums, setAlbums] = useState<Album[]>([]);
    const location = useLocation();

    useEffect(() => {
        const getAlbums = async () => {
            try {
                const fetchedAlbums = await fetchAlbums();
                setAlbums(fetchedAlbums);
            } catch (error) {
                console.error('Failed to fetch albums:', error);
            }
        };
        getAlbums();
    }, []);

    return (
        <aside className="flex flex-col space-y-4">
            <Link
                to={'/library'}
                className={`flex items-center space-x-2 group transition-all cursor-pointer ${
                    location.pathname === '/library' ? '' : 'hover:text-zinc-50'
                } ${
                    location.pathname === '/library'
                        ? 'text-orange-300'
                        : 'text-zinc-400'
                }`}
            >
                <Library className="w-8 h-8 " />
                <h1 className={`text-2xl font-bold`}>Library</h1>
            </Link>
            <div className="space-y-2">
                {albums.map((album) => (
                    <Link
                        key={album._id}
                        to={`/album/${album._id}`}
                        className={`hover:scale-105 bg-zinc-800 p-2 rounded-lg flex items-center space-x-2 group transition-all cursor-pointer ${
                            location.pathname === `/album/${album._id}` ? '' : 'hover:bg-zinc-700'
                        } ${
                            location.pathname === `/album/${album._id}`
                                ? 'text-orange-300'
                                : 'text-zinc-400'
                        }`}
                    >
                        <img src={album.imageUrl} className="w-12 h-12 shrink-0 object-cover" />
                        <span className="text-xl font-semibold">{album.title}</span>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
