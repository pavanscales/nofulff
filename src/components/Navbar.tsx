
import { Link, useLocation } from "react-router-dom";
import { Sun } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-blue-600" : "text-gray-600 hover:text-gray-900";
  };

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <div className="bg-blue-600 text-white font-bold text-lg p-2 rounded mr-2">
            HH
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`font-medium ${isActive('/')}`}>Home</Link>
          <Link to="/problems" className={`font-medium ${isActive('/problems')}`}>Problems</Link>
          <Link to="/leaderboard" className={`font-medium ${isActive('/leaderboard')}`}>Leaderboard</Link>
          <Link to="/blog" className={`font-medium ${isActive('/blog')}`}>Blog</Link>
          <Link to="/forums" className={`font-medium ${isActive('/forums')}`}>Forums</Link>
          <Link to="/submit" className={`font-medium ${isActive('/submit')}`}>Submit</Link>
        </nav>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Sun size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
