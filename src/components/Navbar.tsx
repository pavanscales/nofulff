
import { Link } from "react-router-dom";
import { Sun } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <div className="bg-blue-600 text-white font-bold text-lg p-2 rounded mr-2">
            HH
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-blue-600 font-medium">Home</Link>
          <Link to="/problems" className="text-gray-600 hover:text-gray-900 font-medium">Problems</Link>
          <Link to="/leaderboard" className="text-gray-600 hover:text-gray-900 font-medium">Leaderboard</Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-900 font-medium">Blog</Link>
          <Link to="/forums" className="text-gray-600 hover:text-gray-900 font-medium">Forums</Link>
          <Link to="/submit" className="text-gray-600 hover:text-gray-900 font-medium">Submit</Link>
        </nav>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Sun size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
