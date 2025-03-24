import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="flex items-center justify-between bg-zinc-900 rounded-2xl">
            <img
                onClick={() => navigate('/')}
                src="/logo.png"
                alt="Logo"
                className="w-12 h-12 rounded-full cursor-pointer"
            />

            {/* Centered Search Bar */}
            <div className="relative w-full max-w-md flex-1 flex justify-center group">
                {/* Search icon */}
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-hover:text-white cursor-pointer" />
                {/* Input field */}
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full max-w-md bg-zinc-800 text-white placeholder-zinc-400 rounded-full py-4 pl-10 pr-6 focus:outline-none focus:ring-2 focus:ring-purple-500 
                    transition-all group-hover:placeholder-white group-hover:bg-zinc-700 cursor-pointer"
                />
            </div>
            <div></div>
        </nav>
    );
};

export default Navbar;
