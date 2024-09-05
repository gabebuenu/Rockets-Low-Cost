import React, { useState, useEffect } from "react";

function Cotacoes() {
  const [cotacoes, setCotacoes] = useState([]);
  const [foguetes, setFoguetes] = useState([]);
  const [novaCotacao, setNovaCotacao] = useState({
    fogueteId: "",
    margemLucro: 0,
    valorTotal: 0,
  });

  useEffect(() => {
    // Fetch foguetes ativos
    const fetchFoguetes = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      const data = await response.json();
      setFoguetes(data.filter(f => f.active)); // Apenas foguetes ativos
    };
    fetchFoguetes();
  }, []);

  const criarCotacao = async () => {
    const fogueteSelecionado = foguetes.find(f => f.rocket_id === novaCotacao.fogueteId);
    if (!fogueteSelecionado.active) {
      alert("O foguete não está ativo!");
      return;
    }

    const valorTotal = fogueteSelecionado.cost_per_launch + (fogueteSelecionado.cost_per_launch * novaCotacao.margemLucro) / 100;
    
    const cotacao = {
      foguete: fogueteSelecionado.rocket_name,
      ativo: fogueteSelecionado.active,
      custo: fogueteSelecionado.cost_per_launch,
      imagem: fogueteSelecionado.flickr_images[0],
      margemLucro: novaCotacao.margemLucro,
      valorTotal,
    };

    // Salvar a cotação (no estado local ou no backend)
    setCotacoes([...cotacoes, cotacao]);
  };

  return (
    <div>
      <h2>Criar Cotação</h2>
      <div>
        <select onChange={(e) => setNovaCotacao({ ...novaCotacao, fogueteId: e.target.value })}>
          {foguetes.map((foguete) => (
            <option key={foguete.rocket_id} value={foguete.rocket_id}>
              {foguete.rocket_name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Margem de lucro (%)"
          onChange={(e) => setNovaCotacao({ ...novaCotacao, margemLucro: parseFloat(e.target.value) })}
        />
        <button onClick={criarCotacao}>Criar Cotação</button>
      </div>

      <h2>Cotações Existentes</h2>
      <ul>
        {cotacoes.map((cotacao, index) => (
          <li key={index}>
            <h3>{cotacao.foguete}</h3>
            <p>Custo: {cotacao.custo}</p>
            <p>Lucro: {cotacao.margemLucro}%</p>
            <p>Valor Total: {cotacao.valorTotal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cotacoes;
