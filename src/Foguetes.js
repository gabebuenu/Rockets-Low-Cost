import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./css/Foguetes.css";

function Foguetes() {
  const navigate = useNavigate();
  const location = useLocation();
  const [foguetesSpaceX, setFoguetesSpaceX] = useState([]); // Foguetes da API SpaceX
  const [foguetesPersonalizados, setFoguetesPersonalizados] = useState([]); // Foguetes personalizados
  const [isFoguetesLoaded, setIsFoguetesLoaded] = useState(false);
  const { usuario } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
  const [novoFoguete, setNovoFoguete] = useState({
    nome: "",
    missao: "",
    ano: "",
    imagem: "",
    custo: "",
    ativo: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!usuario) {
      navigate("/");
      return;
    }

    const fetchFoguetesComMissoes = async () => {
      try {
        const foguetesResponse = await fetch("https://api.spacexdata.com/v3/rockets");
        const foguetesData = await foguetesResponse.json();

        const launchesResponse = await fetch("https://api.spacexdata.com/v3/launches");
        const launchesData = await launchesResponse.json();

        const foguetesComMissoes = foguetesData.map((foguete) => {
          const missao = launchesData.find(
            (launch) => launch.rocket.rocket_id === foguete.rocket_id
          );

          return {
            id: foguete.rocket_id,
            nome: foguete.rocket_name,
            missao: missao ? missao.mission_name : "Missão Desconhecida",
            ano: foguete.first_flight.split("-")[0],
            imagem: foguete.flickr_images[0] || "placeholder.png",
            custo: foguete.cost_per_launch,
            ativo: foguete.active,
            tipo: missao ? missao.rocket.rocket_type : "Tipo Desconhecido",
            lancado: false,
            dataLancamento: "",
          };
        });

        setFoguetesSpaceX(foguetesComMissoes);
        setIsFoguetesLoaded(true);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchFoguetesComMissoes();

    // Carrega foguetes personalizados do localStorage
    const foguetesPersistidos = JSON.parse(localStorage.getItem(`foguetes_${usuario.nome}`)) || [];
    setFoguetesPersonalizados(foguetesPersistidos);
  }, [navigate, usuario]);

  useEffect(() => {
    if (isFoguetesLoaded && location.state?.fogueteAtualizado) {
      const fogueteAtualizado = location.state.fogueteAtualizado;
  
      // Atualiza foguetes SpaceX
      setFoguetesSpaceX((prevFoguetes) => {
        return prevFoguetes.map((foguete) => {
          if (foguete.id === fogueteAtualizado.id) {
            return {
              ...foguete,
              lancado: fogueteAtualizado.lancado,
              dataLancamento: fogueteAtualizado.dataLancamento,
            };
          }
          return foguete; // Mantém o estado de foguetes já lançados
        });
      });
  
      // Atualiza foguetes personalizados
      setFoguetesPersonalizados((prevFoguetes) => {
        const foguetesAtualizados = prevFoguetes.map((foguete) => {
          if (foguete.id === fogueteAtualizado.id) {
            return {
              ...foguete,
              lancado: fogueteAtualizado.lancado,
              dataLancamento: fogueteAtualizado.dataLancamento,
            };
          }
          return foguete; // Mantém o estado de foguetes já lançados
        });
        localStorage.setItem(`foguetes_${usuario.nome}`, JSON.stringify(foguetesAtualizados));
        return foguetesAtualizados;
      });
  
      navigate("/foguetes", { replace: true, state: {} });
    }
  }, [isFoguetesLoaded, location.state, navigate, usuario]);
  
  

  const handleCreateFoguete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/foguetes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoFoguete),
      });

      if (response.ok) {
        const fogueteCriado = await response.json();

        const foguetesAtualizados = [...foguetesPersonalizados, fogueteCriado];
        setFoguetesPersonalizados(foguetesAtualizados);
        localStorage.setItem(`foguetes_${usuario.nome}`, JSON.stringify(foguetesAtualizados));

        setShowForm(false);
        setErrorMessage("");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error("Erro ao criar o foguete:", error);
      setErrorMessage("Erro ao criar o foguete. Tente novamente.");
    }
  };

  const handleLaunchClick = (foguete) => {
    if (foguete.lancado) {
      navigate(`/lancado/${foguete.id}`, { state: { foguete } });
    } else {
      navigate("/lancamento", { state: { foguete } });
    }
  };
  

  return (
    <div className="foguetes-container">
      <h1>Olá {usuario ? usuario.nome : "Usuário"}, selecione o lançamento</h1>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <div className="foguetes-grid">
        <div className="foguete-card">
          <h3>Criar novo foguete</h3>
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? "Fechar Formulário" : "Novo Foguete"}
          </button>
          {showForm && (
            <form onSubmit={handleCreateFoguete}>
              <input
                type="text"
                placeholder="Nome do Foguete"
                value={novoFoguete.nome}
                onChange={(e) => setNovoFoguete({ ...novoFoguete, nome: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Tipo do Foguete"
                value={novoFoguete.tipo}
                onChange={(e) => setNovoFoguete({ ...novoFoguete, tipo: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Missão"
                value={novoFoguete.missao}
                onChange={(e) => setNovoFoguete({ ...novoFoguete, missao: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Ano de lançamento"
                value={novoFoguete.ano}
                onChange={(e) => setNovoFoguete({ ...novoFoguete, ano: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Imagem (URL)"
                value={novoFoguete.imagem}
                onChange={(e) => setNovoFoguete({ ...novoFoguete, imagem: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Custo"
                value={novoFoguete.custo}
                onChange={(e) => setNovoFoguete({ ...novoFoguete, custo: e.target.value })}
                required
              />
              <label>
                Ativo:
                <input
                  type="checkbox"
                  checked={novoFoguete.ativo}
                  onChange={(e) => setNovoFoguete({ ...novoFoguete, ativo: e.target.checked })}
                />
              </label>
              <button type="submit">Criar Foguete</button>
            </form>
          )}
        </div>

        {/* Exibe os foguetes da SpaceX */}
        {foguetesSpaceX.map((foguete, index) => (
          <div key={`${foguete.id}-${index}`} className="foguete-card">
            <img src={foguete.imagem} alt={foguete.nome} />
            <h3>{foguete.nome}</h3>
            <p>Nome da missão: {foguete.missao}</p>
            <p>Ano de lançamento: {foguete.ano}</p>
            <button onClick={() => handleLaunchClick(foguete)}>
              {foguete.lancado ? "Lançado" : "Lançar"}
            </button>
          </div>
        ))}

        {/* Exibe os foguetes personalizados */}
        {foguetesPersonalizados.map((foguete, index) => (
          <div key={`${foguete.id}-${index}`} className="foguete-card">
            <img src={foguete.imagem} alt={foguete.nome} />
            <h3>{foguete.nome}</h3>
            <p>Nome da missão: {foguete.missao}</p>
            <p>Ano de lançamento: {foguete.ano}</p>
            <button onClick={() => handleLaunchClick(foguete)}>
              {foguete.lancado ? "Lançado" : "Lançar"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foguetes;
