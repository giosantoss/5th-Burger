import React,{useState,useEffect} from 'react'
import './header.css'
import Fifthlogo from '../../assets/fifth-logo.png'
import Navigator from '../nav/Navigator'
import Sacola from '../../assets/sacola.png'
import {BsFillDiamondFill} from 'react-icons/bs'
/*import WhatsAppMessage from './WhatsAppMessage'*/

function Header(props) {

  const {cartCount, cartItems, removeFromCart} = props
  const [showSacola, setShowSacola] = useState(false)
  let total = 0

  function handleSacola() {
    setShowSacola(!showSacola);
  }


  return (
    <header>
        <div className="logo">
            <img src= {Fifthlogo} alt="Logo"/>
        </div>
        
        <Navigator/>

        <div className="sacola">
          <div onClick={handleSacola} className="sacola-main">
            <img src={Sacola} alt="" />
            <div className="sacola-quant">
              {cartCount}
            </div>
          </div>
          {showSacola && (
            <div className="show">
              <p><BsFillDiamondFill className='diamond'/>Sacola<BsFillDiamondFill className='diamond'/></p>
              <ul>
                {cartItems.map((item) => {
                  total += item.preco * item.quantidade;
                  return (
                    <li key={item.id}>
                      
                      {item.quantidade > 1 ? `x${item.quantidade} ` : ''} {item.nome && `${item.nome}`}<span>R${item.preco.toFixed(2)} </span>
                      <button onClick={() => removeFromCart(item.id)}>Remover</button>
                    </li>
                  );
                })}
              </ul>
              
              <li>Total : <span>R${total.toFixed(2)}</span></li>
              <button><BsFillDiamondFill className='diamond'/>Finalizar Pedido<BsFillDiamondFill className='diamond'/></button>
              {/*<WhatsAppMessage cartItems={cartItems}/>*/}
            </div>
          )}

        </div>
        
    </header>
  )
}

export default Header