import { Home, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between bg-zinc-900 rounded-2xl p-4">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        src="/logo.png"
        alt="Logo"
        className="w-12 h-12 rounded-full cursor-pointer"
      />

      {/* Search Bar with Home button next to it */}
      <div className="relative w-full max-w-md flex items-center space-x-2">
        {/* Home button - positioned next to the search bar */}
        <div
          className={`hover:scale-105 flex items-center justify-center w-13 h-13 bg-zinc-800 rounded-full cursor-pointer ${
            location.pathname === "/" ? "text-orange-300" : "text-zinc-400"
          }`}
          onClick={() => navigate("/")}
        >
          <Home className="w-6 h-6 " />
        </div>

        {/* Search input */}
        <div className="relative w-full flex-1 flex justify-center group">
          {/* Search icon inside the input */}
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-hover:text-white cursor-pointer" />

          {/* Input field */}
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-zinc-800 text-white placeholder-zinc-400 rounded-full py-4 pl-10 pr-6 focus:outline-none focus:ring-2 focus:ring-purple-500 
                    transition-all group-hover:placeholder-white group-hover:bg-zinc-700 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;