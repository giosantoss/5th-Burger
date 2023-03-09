import React, { useState } from 'react';
import '../teste.css'

const Burgersteste = (props) => {
  const [burgers, setBurgers] = useState([
    { id: 1, nome: 'Hamburguer 1', preco: 10 },
    { id: 2, nome: 'Hamburguer 2', preco: 15 },
    { id: 3, nome: 'Hamburguer 3', preco: 20 },
  ]);

  const handleClick = (id) => {
    const item = burgers.find((burger) => burger.id === id);
    props.adicionarItem(item);
  };

  return (
    <section id="burgers">
      <h2>Burgers</h2>
      <ul>
        {burgers.map((burger) => (
          <li key={burger.id}>
            {burger.nome} - R$ {burger.preco.toFixed(2)}
            <button onClick={() => handleClick(burger.id)}>Adicionar</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Burgersteste;
