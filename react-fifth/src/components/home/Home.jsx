import React,{useState,useEffect} from 'react'
import './home.css'
import Home1 from '../../assets/home1.jpeg'
import Home2 from '../../assets/home2.jpeg'
import Home3 from '../../assets/home3.jpeg'
import Home4 from '../../assets/home4.jpeg'
import {BsFillDiamondFill} from 'react-icons/bs'

function Home() {

  const [activeNav, setActiveNav] = useState('')

  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    Home3,
    Home4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((backgroundIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundIndex, backgrounds]);

  const backgroundStyle = {
    backgroundImage: `url(${backgrounds[backgroundIndex]})`,
    transition: 'background-image 1.5s ease-in-out'
  };

  return (
    <section id='home' style={backgroundStyle}>
      <div className="home-info">
        <h1 className=''>Bem vindo à 
          <span className='home-title'>
            <BsFillDiamondFill width={20} height={20} className='home-diamond'/> 5ᵀᴴ BURGER <BsFillDiamondFill className='home-diamond'/>
          </span> 
          <div className="hide">
            fifth 5th
          </div>
        </h1>
        {/* <p>Olá, amantes de hambúrguer! Estão com vontade de um hambúrguer delicioso e suculento? Venha conhecer a 5th Burger, a mais nova e saborosa hamburgueria delivery da cidade!</p>
        <p> Nossos hambúrgueres são feitos com ingredientes de alta qualidade e preparados na perfeição, garantindo a satisfação do seu paladar. Seja um clássico cheeseburger ou um hambúrguer especial criativo, temos o que você procura. Então, por que esperar?</p> <p style={{textAlign:'center'}}>Faça seu pedido online agora mesmo e sinta a diferença na 5th Burger!</p> */}
      </div>
      {/* <div className="carousel">
        <div className="slide">
          <img src={Home1} alt=""/>
        
          <img src={Home2} alt=""/>
        </div>
      </div> */}
    </section>
  )
}

export default Home