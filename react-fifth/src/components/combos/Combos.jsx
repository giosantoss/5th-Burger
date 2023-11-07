import React,{useState} from 'react'

function Combos(props) {
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
    <section id='combos' className='cardapio'>
      <h1>COMBOS</h1>

      <div className="burger">
        <div className="burger-info">
          <h2>Burgers + refri + batata</h2>
          <p>Hamburger, refri de sua escolha, e uma bela porção de batata.</p>
          <small>R$29,90</small>
        </div>
        <div className="card-img">
          <img src="https://as2.ftcdn.net/v2/jpg/03/07/98/35/1000_F_307983555_LOc4qQMfYz9c90RnaUc9v2AmmbkR2HKD.jpg" alt="New-Orleans" />
          <button>+ Add</button>
        </div>
      </div>

    </section>
  )
}

export default Combos