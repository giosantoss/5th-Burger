import React,{useState,useEffect} from 'react'
import './header.css'
import Fifthlogo from '../../assets/fifth-logo.png'
import Navigator from '../nav/Navigator'
import Sacola from '../../assets/sacola.png'
import {BsFillDiamondFill} from 'react-icons/bs'
import { motion,AnimatePresence } from 'framer-motion'

/*import WhatsAppMessage from './WhatsAppMessage'*/

function Header(props) {

  const {cartCount, cartItems, removeFromCart} = props
  const [showSacola, setShowSacola] = useState(false)
  let total = 0

  function handleSacola() {
    setShowSacola(!showSacola);
  }

  let formattedMessage = '';
  let total1 = 0;

  for (const item of cartItems) {
      const subtotal = item.price * item.quantidade;
      formattedMessage += `${item.quantidade}x ${item.name.toUpperCase()}\n`;
      total1 += subtotal;
  }

  formattedMessage += `TOTAL: R$${total1.toFixed(2)}`;


  const finalizarPedido = () => {
    const cartString = JSON.stringify(cartItems);
    const whatsappNumber = '+558398289043';
    const message = encodeURIComponent(`Olá! Gostaria de fazer um pedido:\n${formattedMessage}`);

    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    
    window.open(whatsappLink, '_blank');
  };

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

          <AnimatePresence initial={false}>
            {showSacola && (
              <motion.div className="show"
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <p><BsFillDiamondFill className='diamond'/>Sacola<BsFillDiamondFill className='diamond'/></p>
                <ul>
                  {cartItems.map((item) => {
                    total += item.price * item.quantidade;
                    return (
                      <li key={item.id}>
            
                        {item.quantidade > 1 ? `x${item.quantidade} ` : ''} {item.name && `${item.name}`}<span>R${item.price.toFixed(2)} </span>
                        <button onClick={() => removeFromCart(item.id)}>Remover</button>
                      </li>
                    );
                  })}
                </ul>
            
                <li>Total : <span>R${total.toFixed(2)}</span></li>
                <button onClick={finalizarPedido}><BsFillDiamondFill className='diamond'/>Finalizar Pedido<BsFillDiamondFill className='diamond'/></button>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
        
    </header>
  )
}

export default Header