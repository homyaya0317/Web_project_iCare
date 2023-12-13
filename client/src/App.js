
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Admi from "./Components/Admi";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<Signup/>} />
            <Route path="admin" element={<Admi/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
