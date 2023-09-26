import React, { useState } from 'react';
import '../css/Contato.css'; // Importe o arquivo CSS para estilos personalizados

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar a mensagem, por exemplo, usando uma API ou outra forma de envio de dados
    // Neste exemplo, apenas exibimos uma mensagem de sucesso fictícia
    setMensagemEnviada(true);
  };

  return (
    <div className="contato-container">
      <h2>Entre em Contato</h2>
      {mensagemEnviada ? (
        <div className="mensagem-sucesso">
          <p>Sua mensagem foi enviada com sucesso!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-enviar">
            Enviar Mensagem
          </button>
        </form>
      )}
    </div>
  );
};

export default Contato;
