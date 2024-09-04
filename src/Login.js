import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import illustration from "./img/hero-img.jpg"; 

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/foguetes"); 
  };

  return (
    <div className="login-container">
      <div className="illustration">
        <img src={illustration} alt="Illustration" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Digite seu nome" />
        <button onClick={handleLogin}>Entrar</button>
        <div className="signup-link">
          <p>Não tem conta? <Link to="/register">Cadastrar-se aqui</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
