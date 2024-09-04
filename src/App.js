import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Foguetes from "./Foguetes";
import Lançamento from "./Lançamento"; 
import "./css/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/foguetes" element={<Foguetes />} />
        <Route path="/lancamento" element={<Lançamento />} />  {}
      </Routes>
    </Router>
  );
}

export default App;
