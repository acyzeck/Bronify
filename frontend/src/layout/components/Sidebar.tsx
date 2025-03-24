import { Library } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    return (
        <aside className="flex flex-col space-y-4">
            <Link
                to={'/library'}
                className={`flex items-center space-x-2 group  transition-all cursor-pointer ${
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
        </aside>
    );
};

export default Sidebar;
