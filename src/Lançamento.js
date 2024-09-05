import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./css/Lançamento.css";
import "./css/ModalLancamento.css"; // Importamos o CSS do modal

function Lançamento() {
  const location = useLocation();
  const navigate = useNavigate();
  const foguete = location.state?.foguete;
  const { usuario } = useContext(AuthContext);

  // Estados para gerenciar o formulário e o modal
  const [lucro, setLucro] = useState("");
  const [dataLançamento, setDataLançamento] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [valorTotal, setValorTotal] = useState(0);
  const [carregando, setCarregando] = useState(false); // Novo estado para carregamento

  if (!foguete) {
    return <div>Carregando detalhes do foguete...</div>;
  }

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se o foguete está ativo
    if (!foguete.ativo) {
      alert("O foguete não está ativo. A cotação não pode ser realizada.");
      return;
    }

    // Calcular o valor total do lançamento
    const margemLucro = parseFloat(lucro);
    const valorCalculado = foguete.custo * (1 + margemLucro / 100);

    setValorTotal(valorCalculado);
    setMostrarModal(true); // Exibir o modal
  };

  // Função para confirmar o lançamento
  const confirmarLancamento = () => {
    setCarregando(true); // Inicia o carregamento

    // Simula o tempo de carregamento antes de redirecionar
    setTimeout(() => {
      setCarregando(false);

      // Atualiza o foguete com as novas informações de lançamento
      const fogueteAtualizado = { 
        ...foguete, 
        lancado: true,  // Marca como lançado
        dataLancamento: dataLançamento  // Adiciona a data do lançamento
      };

      // Redireciona para a página de foguetes, passando o foguete atualizado
      navigate("/foguetes", { state: { fogueteAtualizado } });
    }, 2000); // Tempo de 2 segundos para simular carregamento
  };

  // Função para cancelar e fechar o modal
  const cancelarLancamento = () => {
    setMostrarModal(false);
  };

  return (
    <div className={`lancamento-container ${mostrarModal ? 'blur' : ''}`}>
      <h1>Olá {usuario ? usuario.nome : "Usuário"}, selecione o lançamento</h1>
      <div className="lancamento-grid">
        <div className="foguete-selecionado">
          <h2>Foguete selecionado:</h2>
          <div className="foguete-carde">
            <img src={foguete.imagem} alt="Foguete Selecionado" />
            <h3>{foguete.nome}</h3>
            <p>Tipo do motor: {foguete.tipo}</p>
            <p>Custo do lançamento: ${foguete.custo.toLocaleString()}</p>
            <p>Situação: {foguete.ativo ? "Ativo" : "Inativo"}</p>
          </div>
        </div>
        <div className="lucro-data">
          <h2>Data e Lucro:</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Informe o % de lucro desejado"
              value={lucro}
              onChange={(e) => setLucro(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Selecione a data de lançamento"
              value={dataLançamento}
              onChange={(e) => setDataLançamento(e.target.value)}
              required
            />
            <button type="submit">Realizar lançamento</button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="modal">
          <div className="modal-content">
            {carregando ? (
              <div className="loader-container">
                <div className="spinner"></div>
                <p>Lançamento confirmado com sucesso!</p>
              </div>
            ) : (
              <>
                <h1>Confirmação de Lançamento</h1>
                <p><strong>Foguete:</strong> {foguete.nome}</p>
                <p><strong>Data de Lançamento:</strong> {dataLançamento}</p>
                <p><strong>Valor Total:</strong> ${valorTotal.toLocaleString()}</p>
                <button className="confirm-button" onClick={confirmarLancamento}>
                  Confirmar Lançamento
                </button>
                <button className="cancel-button" onClick={cancelarLancamento}>
                  Cancelar
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Lançamento;
