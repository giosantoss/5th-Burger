import React from 'react';
import '../teste.css'

const Headerteste = (props) => {
    const { cartItems, removeFromCart} = props;

  return (
    <header>
      <nav>
        <ul>
          <li><a href="#burgers">Burgers</a></li>
          <li><a href="#bebidas">Bebidas</a></li>
        </ul>
      
        <div className="sacola-btn">
            <span>Sacola</span>
            <div className="sacola">
            <h3>Sacola</h3>
            <ul>
                {cartItems.map((item) => (
                <li key={item.id}>
                    {item.nome} - R$ {item.preco.toFixed(2)}
                    <button onClick={() => removeFromCart(item.id)}>Remover</button>
                </li>
                ))}
            </ul>
            </div>
            <div className="badge">{cartItems.length}</div>
        </div>
    </nav>
    </header>
  );
};

export default Headerteste;

