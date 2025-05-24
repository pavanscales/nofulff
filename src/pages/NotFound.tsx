import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 md:px-8">
      <div className="text-center max-w-md">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">404</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">Oops! Page not found</p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
