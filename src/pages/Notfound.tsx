import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const Notfound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-yellow-400 text-white text-center">
      <div>
        <h1 className="text-5xl font-bold mb-4">404 Not Found</h1>
        <p className="text-lg mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button className=" text-white font-semibold py-2 px-4 rounded transition duration-200">
          <Link to="/"> Go to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Notfound;
