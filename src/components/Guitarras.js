import React from 'react';
import '../css/Guitarras.css';
import Telecaster from '../img/Telecaster.jpg'

const guitarras = [
  {
    id: 1,
    nome: 'Guitarra Tagima Tw-55 Telecaster',
    descricao: 'Uma guitarra clássica com um som nítido.',
    preço: 'R$ 1000,00 no pix com desconto de 5% ou R$ 1100,00 em 12x sem juros',
    imagem: 'Telecaster.jpg',
  }
];

const Guitarras = () => {
  const handleCompra = (guitarraNome) => {
    alert(`Você adicionou a guitarra ao carrinho: ${guitarraNome}`);
  };

  return (
    <div className="guitarras-container">
      <h2>Nossas Guitarras</h2>
      <div className="guitarras-list">
        {guitarras.map((guitarra) => (
          <div key={guitarra.id} className="guitarra-card">
            <img src={Telecaster} alt={guitarra.nome} />
            <h3>{guitarra.nome}</h3>
            <p>{guitarra.descricao}</p>
            <p>{guitarra.preço}</p>
            <button
              onClick={() => handleCompra(guitarra.nome)}
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

export default Guitarras;
