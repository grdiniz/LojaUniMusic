import React from 'react';
import '../css/Homepage.css'; // Importe o arquivo CSS para estilos personalizados

const produtosEmDestaque = [
  {
    id: 1,
    nome: 'Produto 1',
    descricao: 'Uma descrição curta do Produto 1.',
    imagem: 'produto1.jpg',
  },
  {
    id: 2,
    nome: 'Produto 2',
    descricao: 'Uma descrição curta do Produto 2.',
    imagem: 'produto2.jpg',
  },
  {
    id: 3,
    nome: 'Produto 3',
    descricao: 'Uma descrição curta do Produto 3.',
    imagem: 'produto3.jpg',
  },
];

const HomePage = () => {
  return (
    <div className="home-page-container">
      <main className="main-content">
        <section className="destaques">
          <h2>Produtos em Destaque</h2>
          <div className="produtos-em-destaque">
            {produtosEmDestaque.map((produto) => (
              <div key={produto.id} className="produto-card">
                <img
                  src={`/imagens/${produto.imagem}`} // Caminho para a imagem
                  alt={produto.nome}
                />
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Outras seções da página */}
      </main>
      <footer className="footer">
        {/* Rodapé */}
      </footer>
    </div>
  );
};

export default HomePage;
