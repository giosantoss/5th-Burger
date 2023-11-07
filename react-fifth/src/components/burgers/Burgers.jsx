import React, { useState,useEffect } from 'react'
import './burgers.css'
import '../header/pedido.css'
import Cheeseburger from './fifth-burgers/cheese-burger.jpeg'
import Bronxsalad from './fifth-burgers/bronx-salad.jpeg'
import Manhatan from './fifth-burgers/manhatan.jpeg'
/*import Texas from './fifth-burgers/texas.jpeg'*/
import Onionqueens from './fifth-burgers/onion-queens.jpeg'
import Cheddarland from './fifth-burgers/cheddarland.jpeg'
import Gorgonyork from './fifth-burgers/gorgon-york.jpeg'
import Hawaii from './fifth-burgers/hawaii.jpeg'
import Empire from './fifth-burgers/empire.jpeg'
import Cheesesquare from './fifth-burgers/cheese-square.jpeg'
import Neworleans from './fifth-burgers/new-orleans.jpeg'
import {BsFillDiamondFill} from 'react-icons/bs'
import SacolaAdd from '../../assets/sacola+.png'

function Burgers(props) {
  const { adicionarItem } = props;

  const [burgers, setBurgers] = useState([
    { id: 1, name: 'Cheese Burger', price: 14.90 },
    { id: 2, name: 'Bronx Salad', price: 25.90 },
    { id: 3, name: 'Manhatan', price: 25.90 },
    { id: 4, name: 'Texas BBQ', price: 26.90 },
    { id: 5, name: 'Onion Queens', price: 26.90 },
    { id: 6, name: 'Cheddar-Land', price: 27.90 },
    { id: 7, name: 'Gorgon York', price: 29.90 },
    { id: 8, name: 'Hawaii', price: 29.90 },
    { id: 9, name: 'Cheese Square', price: 33.90 },
    { id: 10, name: 'Empire State', price: 34.90 },
    { id: 11, name: 'New Orleans', price: 36.90 },
  ]);

  const handleClick = (id) => {
    const item = burgers.find((burger) => burger.id === id);
    adicionarItem(item);
  };
  
  return (
    <section id='burgers'>

      <div className="cardapio">

        <h1><BsFillDiamondFill className='diamond'/>BURGERS<BsFillDiamondFill className='diamond'/></h1>
        <div className="burger">
          <div className="burger-info">
            <h2>Cheese Burger</h2>
            <p>O bom e velho cheeseburger com nosso blend de 80g juntamente com fatia de cheddar e maionese da casa a sua escolha</p>
            <small>R$14,90</small>
          </div>
          <div className="card-img">
            <div className="image"><img src={Cheeseburger} alt="Cheese-Burger" /></div>
            <button onClick={() => handleClick(1)}> <img src={SacolaAdd}/> <span>Add</span></button>
          </div>
        </div>

        <div className="burger">
          <div className="burger-info">
            <h2>Bronx Salad</h2>
            <p>Os que gostam de burger com salada vão adorar essa combinação de duas carnes de 80g, acompanhadas de duas fatias de queijo prato, com alface americano, rodelas de tomate, cebola e finalizado com a deliciosa maionese verde da casa</p>
            <small>R$25,90</small>
          </div>
          <div className="card-img">
            <img src={Bronxsalad} alt="Bronx-salad" />
            <button onClick={() => handleClick(2)}><img src={SacolaAdd}/> <span>Add</span></button>
          </div>
        </div>

        <div className="burger">
          <div className="burger-info">
            <h2>Manhatan Classic</h2>
            <p>O clássico que todo mundo ama vem montado com duas carnes de 80g, juntamente com duas fatias de cheddar, cebola picada, ketchup diferente dos iguais, mostarda com mel e picles (qualquer semelhança com a concorrência é mera coincidência)</p>
            <small>R$25,90</small>
          </div>
          <div className="card-img">
            <img src={Manhatan} alt="Manhatan" />
            <button onClick={() => handleClick(3)}><img src={SacolaAdd}/> <span>Add</span></button>
          </div>
        </div>

        <div className="burger">
          <div className="burger-info">
            <h2>Texas BBQ</h2>
            <p>Para quem gosta de churrasco apresentamos diretamente das terras texanas com um molho barbecue diferente de tudo que você conhece, duas carnes de 80g , duas fatias de cheddar, tiras de bacon e deliciosos onion rings para fechar essa combinação especial</p>
            <small>R$26,90</small>
          </div>
          <div className="card-img">
            <img src={Hawaii} alt="Texas" />
            <button onClick={() => handleClick(4)}><img src={SacolaAdd}/> <span>Add</span></button>
          </div>
        </div>

        <div className="burger">
          <div className="burger-info">
            <h2>Onion Queens</h2>
            <p>Para quem gosta de cebola caramelizada temos esse especial que vem com duas carnes de 80g, duas fatias de cheddar, acompanhadas por uma deliciosa cebola caramelizada da casa, juntamente com tiras de bacon e maionese de bacon artesanal</p>
            <small>R$26,90</small>
          </div>
          <div className="card-img">
            <img src={Onionqueens} alt="Onion-queens" />
            <button onClick={() => handleClick(5)}><img src={SacolaAdd}/> <span>Add</span></button>
          </div>
        </div>

        <div className="burger">
          <div className="burger-info">
            <h2>Cheddar-Land</h2>
            <p>Para os amantes de cheddar temos duas carnes de 80g, fatia de cheddar acompanhada de um delicioso creme de cheddar e para fechar fatias de bacon</p>
            <small>R$27,90</small>
          </div>
          <div className="card-img">
            <img src={Cheddarland} alt="Cheddarland" />
            <button onClick={() => handleClick(6)}><img src={SacolaAdd}/> <span>Add</span></button>
          </div>
        </div>

        <div className="burger">
          <div className="burger-info">
            <h2>Gorgon York</h2>
            <p>Nosso delicioso creme de gorgonzola da casa vem acompanhado de duas carnes de 80g , picles de cebola roxa selecionado e maionese verde artesanal para finalizar essa obra de arte</p>
            <small>R$29,90</small>
          </div>
          <div className="card-img">
            <img src={Gorgonyork} alt="Gorgonyork" />
            <button onClick={() => handleClick(7)}><img src={SacolaAdd}/> <span>Add</span></button>
          </div>
        </div>

        <div className="burger">
          <div className="burger-info">
            <h2>Hawaii</h2>
            <p>Diretamente das terras paradisíacas o nosso maravilhoso hambúrguer feito com duas carnes de 80g, acompanhadas de duas fatias de cheddar, maionese de bacon artesanal + fatias de bacon e o nosso espetacular chutney de abacaxi da casa</p>
            <small>R$29,90</small>
          </div>
          <div className="card-img">
            <img src={Hawaii} alt="Hawaii" />
            <button onClick={() => handleClick(8)}><img src={SacolaAdd}/> <span>Add</span></button>
          </div>
        </div>

        <div className="burger">
          <div className="burger-info">
            <h2>Cheese Square</h2>
            <p>Diretamente da praça mais famosa do mundo esse burger vem com um delicioso queijo muçarela empanado, duas carnes de 80g, juntamente com fatia de queijo prato, nossa maionese picante da casa e de quebra essa deliciosa geleia de pimenta artesanal</p>
            <small>R$33,90</small>
          </div>
          <div className="card-img">
            <img src={Cheesesquare} alt="Cheese-Square" />
            <button onClick={() => handleClick(9)}><img src={SacolaAdd}/> <span>Add</span></button>
          </div>
        </div>

        <div className="burger">
          <div className="burger-info">
            <h2>Empire State Burger</h2>
            <p>Matar a fome do King kong não é fácil, são necessárias três carnes de 80g, juntamente com três fatias de cheddar, deliciosa maionese picante da casa e onion rings para fechar essa obra de arte</p>
            <small>R$34,90</small>
          </div>
          <div className="card-img">
            <img src={Empire} alt="Empire-State" />
            <button onClick={() => handleClick(10)}><img src={SacolaAdd}/> <span>Add</span></button>
          </div>
        </div>

        <div className="burger">
          <div className="burger-info">
            <h2>New Orleans</h2>
            <p>Você sabe de onde vem as melhores receitas com crustáceos? Agora que sabe, pode experimentar esse delicioso e diferente burger com camarões saint jacques (empanados com requeijão), molho tártaro da casa juntamente com carne de 80g e acompanhada de queijo prato fatiado</p>
            <small>R$36,90</small>
          </div>
          <div className="card-img">
            <img src={Neworleans} alt="New-Orleans" />
            <button onClick={() => handleClick(11)}><img src={SacolaAdd}/> <span>Add</span></button>
          </div>
        </div>
        
      </div>

    </section>
  )
}

export default Burgers