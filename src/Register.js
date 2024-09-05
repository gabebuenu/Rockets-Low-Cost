// Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import illustration from "./img/hero-img.jpg";
import "./css/Modal.css";

function Register() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!nome || !idade) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/usuarios/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, idade }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowModal(true);
      } else {
        alert(data.error || "Erro ao registrar.");
      }
    } catch (error) {
      console.error("Erro ao registrar:", error);
      alert("Erro ao registrar usuário.");
    }
  };

  const handleConfirm = () => {
    setShowModal(false);
    navigate("/");
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      {!showModal && (
        <div className="login-page">
        <div className="login-container">
          <div className="illustration">
            <img src={illustration} alt="Illustration" />
          </div>
          <div className="login-form">
            <h2>Cadastrar</h2>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="number"
              placeholder="Digite sua idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
            <button onClick={handleRegister}>Cadastrar</button>
          </div>
        </div>
        </div>
      )}

      {showModal && (
        <div className="modalo">
          <div className="modalo-content">
            <p>Sua idade é:</p>
            <h1>{idade}</h1>
            <button className="confirma-button" onClick={handleConfirm}>
              Confirmar
            </button>
            <button className="cancela-button" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
