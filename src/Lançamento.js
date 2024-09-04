import React from "react";
import "./css/Lançamento.css";
import foguete1 from "./img/foguete1.png";
// import foguete2 from "./img/foguete2.png";
// import foguete3 from "./img/foguete3.png";
// import foguete4 from "./img/foguete4.png";

function Lançamento() {
  return (
    <div className="lancamento-container">
      <h1>Fulano, selecione lucro e data de lançamento</h1>
      <div className="lancamento-grid">
        <div className="foguete-selecionado">
          <h2>Foguete selecionado:</h2>
          <div className="foguete-card">
            {}
            <img src={foguete1} alt="Foguete Selecionado" />
            <h3>Nome do foguete aqui</h3>
            <p>Tipo do motor</p>
            <p>Custo do lançamento</p>
            <p>Situação: Ativo</p>
          </div>
        </div>
        <div className="lucro-data">
          <h2>Data e Lucro:</h2>
          <form>
            <input type="text" placeholder="Informe o % de lucro desejado" />
            <input type="date" placeholder="Selecione a data de lançamento" />
            <button type="submit">Realizar lançamento</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Lançamento;
