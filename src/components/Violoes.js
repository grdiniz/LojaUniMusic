import React from 'react';
import '../css/Violoes.css';
import Violão from '../img/Violão.png'

const violoes = [
  {
    id: 1,
    nome: 'Violão Clássico DI GIORGIO Clássico 38E',
    descricao: 'Um violão com som suave e harmônico.',
    preço: 'R$ 1000,00 no pix com desconto de 5% ou R$ 1100,00 em 12x sem juros',
    imagem: 'classico.jpg',
  },
];

const Violoes = () => {
  const handleCompra = (violaoNome) => {
    alert(`Você adicionou o violão ao carrinho: ${violaoNome}`);
  };

  return (
    <div className="violoes-container">
      <h2>Nossos Violões</h2>
      <div className="violoes-list">
        {violoes.map((violao) => (
          <div key={violao.id} className="violao-card">
            <img
              src={Violão} // Caminho para a imagem
              alt={violao.nome}
            />
            <h3>{violao.nome}</h3>
            <p>{violao.descricao}</p>
            <p>{violao.preço}</p>
            <button
              onClick={() => handleCompra(violao.nome)}
              className="btn-comprar"
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Violoes;
