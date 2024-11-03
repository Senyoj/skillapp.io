import { useState } from "react";
import { Button } from "../../components/ui/button";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white to-red-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96 transition-transform duration-300 "
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-600">
          Welcome Back!
        </h2>
        <div className="mb-4">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <FaEnvelope className="mr-2 text-gray-500" />
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <FaLock className="mr-2 text-gray-500" />
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-transparent w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200"
            placeholder="Enter your password"
          />
        </div>
        <Button
          type="submit"
          className="w-full py-2 text-white font-semibold rounded-lg bg-gray-600 hover:bg-gray-700 transition duration-200"
        >
          Login
        </Button>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-gray-600 hover:underline font-medium"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
