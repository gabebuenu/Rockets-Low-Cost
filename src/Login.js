import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import illustration from "./img/hero-img.jpg";

function Login() {
  const [nome, setNome] = useState("");
  const [idadeConfirmada, setIdadeConfirmada] = useState(null);
  const navigate = useNavigate();

  // Limpa o estado quando o componente é montado
  useEffect(() => {
    setNome("");
    setIdadeConfirmada(null);
  }, []);

  const handleLogin = async () => {
    if (!nome) {
      alert("Por favor, insira seu nome.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome }),
      });

      const data = await response.json();

      if (response.ok) {
        setIdadeConfirmada(data.idade);
      } else {
        alert(data.error || "Erro ao fazer login.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login.");
    }
  };

  const handleConfirmAge = () => {
    localStorage.setItem("usuario", JSON.stringify({ nome, idade: idadeConfirmada }));
    navigate("/foguetes");
    window.location.reload(); // Força o reload após a navegação para "/foguetes"
  };

  return (
    <div className="login-page">
    <div className="login-container">
      {/* Aplica a classe que esconde o conteúdo quando o modal está ativo */}
      <div className={idadeConfirmada !== null ? "hidden-content" : ""}>
        <div className="illustration">
          <img src={illustration} alt="Illustration" />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
          <div className="signup-link">
            <p>
              Não tem conta? <Link to="/register">Cadastrar-se aqui</Link>
            </p>
          </div>
        </div>
      </div>

      {idadeConfirmada !== null && (
        <>
          <div className="modal-backdrop"></div> {/* Fundo escuro */}
          <div className="modalo-content">
            <p>Sua idade é:</p>
            <h1>{idadeConfirmada}</h1>
            <button className="confirma-button" onClick={handleConfirmAge}>
              Confirmar
            </button>
            <button className="cancela-button" onClick={() => setIdadeConfirmada(null)}>
              Cancelar
            </button>
          </div>
        </>
      )}
    </div>
    </div>
  );
}

export default Login;
