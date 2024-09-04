import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Foguetes.css";
import foguete1 from "./img/foguete1.png";
import foguete2 from "./img/foguete2.png";
import foguete3 from "./img/foguete3.png";
import foguete4 from "./img/foguete4.png";

function Foguetes() {
  const navigate = useNavigate();

  const foguetes = [
    { nome: "Foguete 1", missao: "Missão 1", ano: "2023", imagem: foguete1 },
    { nome: "Foguete 2", missao: "Missão 2", ano: "2024", imagem: foguete2 },
    { nome: "Foguete 3", missao: "Missão 3", ano: "2025", imagem: foguete3 },
    { nome: "Foguete 4", missao: "Missão 4", ano: "2026", imagem: foguete4 },
  ];

  const handleLaunchClick = () => {
    navigate("/lancamento");
  };

  return (
    <div className="foguetes-container">
      <h1>Olá Fulano, selecione o lançamento</h1>
      <div className="foguetes-grid">
        {foguetes.map((foguete, index) => (
          <div key={index} className="foguete-card">
            <img src={foguete.imagem} alt={foguete.nome} />
            <h3>{foguete.nome}</h3>
            <p>Nome da missão: {foguete.missao}</p>
            <p>Ano de lançamento: {foguete.ano}</p>
            <button onClick={handleLaunchClick}>Lançar foguete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foguetes;
