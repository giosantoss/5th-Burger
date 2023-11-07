import React, { useState,useContext } from 'react';
import '../teste.css'

const Bebidasteste = (props) => {
  const [bebidas, setBebidas] = useState([
    { id: 1, name: 'Coca-Cola', price: 5 },
    { id: 2, name: 'Fanta', price: 5 },
    { id: 3, name: 'Guaraná', price: 5 },
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
                {bebida.name} - R$ {bebida.price}
                <button onClick={() => handleClick(bebida)}>Adicionar</button>
            </li>
            ))}
        </ul>
</section>

);
};

export default Bebidasteste