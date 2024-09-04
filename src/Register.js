import React, { useState } from "react";
import illustration from "./img/hero-img.jpg"; 
import "./css/Modal.css"; 

function Register() {
  const [age, setAge] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleRegister = () => {
    setShowModal(true); 
  };

  const handleConfirm = () => {
    console.log(`Idade confirmada: ${age}`);
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      {!showModal && ( 
        <div className="login-container">
          <div className="illustration">
            <img src={illustration} alt="Illustration" />
          </div>
          <div className="login-form">
            <h2>Cadastrar</h2>
            <input type="text" placeholder="Digite seu nome" />
            <input
              type="text"
              placeholder="Digite sua idade"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <button onClick={handleRegister}>Cadastrar</button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Sua idade é:</p>
            <h1>{age}</h1>
            <button className="confirm-button" onClick={handleConfirm}>
              Confirmar
            </button>
            <button className="cancel-button" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
