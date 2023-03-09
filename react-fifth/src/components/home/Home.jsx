import React,{useState} from 'react'
import './home.css'
import Home1 from '../../assets/home1.jpeg'
import Home2 from '../../assets/home2.jpeg'
import {BsFillDiamondFill} from 'react-icons/bs'

function Home() {

  const [activeNav, setActiveNav] = useState('')

  return (
    <section id='home'>
      <h1>Bem vindo ao <BsFillDiamondFill className='diamond'/> 5ᵀᴴ BURGER <BsFillDiamondFill className='diamond'/> <div className="hide">fifth 5th</div></h1>
      <p>Olá, amantes de hambúrguer! Estão com vontade de um hambúrguer delicioso e suculento? Venha conhecer a 5th Burger, a mais nova e saborosa hamburgueria delivery da cidade! Nossos hambúrgueres são feitos com ingredientes de alta qualidade e preparados na perfeição, garantindo a satisfação do seu paladar. Seja um clássico cheeseburger ou um hambúrguer especial criativo, temos o que você procura. Então, por que esperar? Ligue ou faça seu pedido online agora mesmo e sinta a diferença na 5th Burger!</p>
      <div className="carousel">
            <div className="slide">
              <img src={Home1} alt=""/>
            
              <img src={Home2} alt=""/>
            </div>
          </div>
    </section>
  )
}

export default Home