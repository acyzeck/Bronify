import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// MainLayout.tsx

const MainLayout = () => {
    return (
        <div className="h-screen w-screen bg-black flex flex-col p-2 overflow-hidden">
            {/* Navbar - Fixed at the top, rounded corners */}
            <div className="w-full bg-zinc-900 rounded-md shadow-lg">
                <Navbar />
            </div>

            {/* Content Wrapper (Sidebar + Main Content) */}
            <div className="flex flex-1 gap-2 mt-2">
                {/* Sidebar - Rounded corners, limited height */}
                <div className="w-64 h-[89vh] bg-zinc-900 rounded-md shadow-lg p-4">
                    <Sidebar />
                </div>

                {/* Main Content (Home) - Rounded Corners, no scrolling */}
                <div className="flex-1 h-[89vh] bg-zinc-900 rounded-md shadow-lg overflow-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
