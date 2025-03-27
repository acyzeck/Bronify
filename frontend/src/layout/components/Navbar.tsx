/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Home, LogIn, LogOut, Search, ShieldCheck } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    userLogout,
    authenticateAdmin,
    authenticateUser,
} from '../../lib/axios';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if the user is an admin
    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const response = await authenticateAdmin();
                if (response.user?.isAdmin) {
                    setIsAdmin(true);
                }
            } catch (error) {
                setIsAdmin(false); // User is not an admin
            }
        };
        checkAdmin();
    }, []);
    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                const response = await authenticateUser();
                if (response.user) {
                    setIsLoggedIn(true);
                }
            } catch (error) {
                setIsLoggedIn(false);
            }
        };
        checkLoggedIn();
    });

    const handleLogout = async () => {
        try {
            await userLogout();
            navigate('/login');
        } catch (error: any) {
            console.error(error.message);
        }
    };

    return (
        <nav className="flex items-center justify-between bg-zinc-900 rounded-2xl p-4">
            {/* Logo */}
            <img
                onClick={() => navigate('/')}
                src="/logo.png"
                alt="Logo"
                className="w-12 h-12 rounded-full cursor-pointer"
            />

            {/* Centered Search Bar with Home button */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                {/* Home button */}
                <div
                    className={`hover:scale-105 flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-full cursor-pointer ${
                        location.pathname === '/'
                            ? 'text-orange-300'
                            : 'text-zinc-400'
                    }`}
                    onClick={() => navigate('/')}
                >
                    <Home className="w-6 h-6" />
                </div>

                {/* Search input */}
                <div className="relative w-64 flex items-center group">
                    <Search className="absolute left-3 w-5 h-5 text-gray-400 transition-colors group-hover:text-white cursor-pointer" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-zinc-800 text-white placeholder-zinc-400 rounded-full py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 
            transition-all group-hover:placeholder-white group-hover:bg-zinc-700 cursor-pointer"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2">
                {/* Admin Button (Only if user is admin) */}
                {isAdmin && (
                    <button
                        className="flex cursor-pointer items-center gap-2 px-4 py-2 text-white bg-purple-600 rounded-xl shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-purple-500 active:scale-95"
                        onClick={() => navigate('/admin')}
                    >
                        <ShieldCheck className="w-5 h-5" />
                        <span className="text-sm font-medium">Admin</span>
                    </button>
                )}

                {/* Logout button */}
                {isLoggedIn && (
                    <div className="flex justify-center">
                        <button
                            className="flex cursor-pointer items-center gap-2 px-4 py-2 text-white bg-zinc-800 rounded-xl shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-zinc-700 active:scale-95"
                            onClick={handleLogout}
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="text-sm font-medium">Logout</span>
                        </button>
                    </div>
                )}
                {!isLoggedIn && (
                    <div className="flex justify-center">
                        <button
                            className="flex cursor-pointer items-center gap-2 px-4 py-2 text-white bg-zinc-800 rounded-xl shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-zinc-700 active:scale-95"
                            onClick={() => navigate('/login')}
                        >
                            <LogIn className="w-5 h-5" />
                            <span className="text-sm font-medium">Log In</span>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
