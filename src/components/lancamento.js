import React, { useState } from "react";

function Lancamentos({ cotacao }) {
  const [lancamentos, setLancamentos] = useState([]);
  const [novaData, setNovaData] = useState("");

  const criarLancamento = () => {
    if (!novaData) {
      alert("Selecione uma data!");
      return;
    }

    const lancamento = {
      foguete: cotacao.foguete,
      data: novaData,
      lancado: false,
    };

    setLancamentos([...lancamentos, lancamento]);
  };

  return (
    <div>
      <h2>Lançamentos</h2>
      <input type="date" onChange={(e) => setNovaData(e.target.value)} />
      <button onClick={criarLancamento}>Agendar Lançamento</button>

      <h2>Próximos Lançamentos</h2>
      <ul>
        {lancamentos.map((lancamento, index) => (
          <li key={index}>
            <h3>{lancamento.foguete}</h3>
            <p>Data: {lancamento.data}</p>
            <p>Status: {lancamento.lancado ? "Lançado" : "Aguardando lançamento"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lancamentos;
