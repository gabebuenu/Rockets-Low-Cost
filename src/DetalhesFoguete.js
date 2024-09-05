import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./css/DetalhesFoguete.css";  // Alteração para adicionar novo CSS

function DetalhesFoguete() {
  const location = useLocation();
  const navigate = useNavigate();
  const foguete = location.state?.foguete;

  if (!foguete) {
    return <p>Foguete não encontrado.</p>;
  }

  const handleCancelarLancamento = () => {
    // Atualiza o estado no localStorage para cancelar o lançamento
    const foguetesPersistidos = JSON.parse(localStorage.getItem("foguetes")) || [];
    const foguetesAtualizados = foguetesPersistidos.map((f) =>
      f.id === foguete.id ? { ...f, lancado: false, dataLancamento: "" } : f
    );
  
    localStorage.setItem("foguetes", JSON.stringify(foguetesAtualizados));
  
    // Navega de volta para a lista de foguetes e passa o foguete atualizado
    navigate("/foguetes", {
      replace: true,
      state: { fogueteAtualizado: { ...foguete, lancado: false, dataLancamento: "" } },
    });
  };
  

  return (
    <div className="detalhes-page">
    <div className="detalhes-foguete-container">
      <h2>Detalhes do Foguete Lançado</h2>
      <div className="foguete-detalhes">
        <div className="foguete-imagem">
          <img src={foguete.imagem} alt={foguete.nome} />
        </div>
        <div className="foguete-info">
          <p><strong>Nome:</strong> {foguete.nome}</p>
          <p><strong>Missão:</strong> {foguete.missao}</p>
          <p><strong>Ano de Lançamento:</strong> {foguete.ano}</p>
          <p><strong>Data de Lançamento:</strong> {foguete.dataLancamento}</p>
          <p><strong>Custo:</strong> ${foguete.custo.toLocaleString()}</p>
        </div>
      </div>
      <button className="cancelar-button" onClick={handleCancelarLancamento}>
        Cancelar Lançamento
      </button>
    </div>
    </div>
  );
}

export default DetalhesFoguete;
