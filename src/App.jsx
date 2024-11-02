import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  
  return (
    <Routes>
      {/* Defining routes for the application */}
      <Route path="/" element={<Home isLogin={isLogin} setIsLogin={setIsLogin} />} /> {/* Home page route */}
      <Route path="/login" element={<Login setIsLogin={setIsLogin} />} /> {/* Login page route */}
      <Route path="/register" element={<Register />} /> {/* Register page route */}
    </Routes>
  );
};

export default App;
