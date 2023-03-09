import React, { useState,useContext } from 'react';
import '../teste.css'

const Bebidasteste = (props) => {
  const [bebidas, setBebidas] = useState([
    { id: 1, nome: 'Coca-Cola', preco: 5 },
    { id: 2, nome: 'Fanta', preco: 5 },
    { id: 3, nome: 'Guaraná', preco: 5 },
  ]);

  const handleClick = (item) => {
    props.adicionarItem(item);
  };


  return (
    <section id="bebidas">
        <h2>Bebidas</h2>
        <ul>
            {bebidas.map((bebida) => (
            <li key={bebida.id}>
                {bebida.nome} - R$ {bebida.preco}
                <button onClick={() => handleClick(bebida)}>Adicionar</button>
            </li>
            ))}
        </ul>
</section>

);
};

export default Bebidasteste