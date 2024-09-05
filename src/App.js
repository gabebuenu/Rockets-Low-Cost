import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";
import Register from "./Register";
import Foguetes from "./Foguetes";
import Lançamento from "./Lançamento"; 
import DetalhesFoguete from "./DetalhesFoguete"; // Novo componente
import "./css/App.css";

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/foguetes" element={<Foguetes />} />
        <Route path="/lancamento" element={<Lançamento />} />  {}
        <Route path="/lancado/:id" element={<DetalhesFoguete />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
