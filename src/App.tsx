import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <div>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
