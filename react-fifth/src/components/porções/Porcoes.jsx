import React,{useState} from 'react'
import './porcoes.css'

function Porcoes(props) {
  const { adicionarItem } = props;

  const [porcoes, setPorcoes] = useState([
    { id: 15, name: 'Batata', price: 9.90 },
    { id: 16, name: 'Onion Rings', price: 9.90 },
    { id: 17, name: 'Nuggets', price: 6.90 },
  ]);

  const handleClick = (id) => {
    const item = porcoes.find((porcoes) => porcoes.id === id);
    adicionarItem(item);
  };

  return (
    <section id='porcoes' className='cardapio'>
      <h1>PORÇÕES</h1>
      <div className="burger">
        <div className="burger-info">
          <h2>Batata</h2>
          <p>Porção de (300g)</p>
          <small>R$9,90</small>
        </div>
        <div className="card-img">
          <img src="https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/05/batata_frita_destaque_ilustrativo_zona_sul.jpg" alt="New-Orleans" />
          <button onClick={() => handleClick(15)}>+ Add</button>
        </div>
      </div>
      <div className="burger">
        <div className="burger-info">
          <h2>Onion Rings</h2>
          <p>Porção de (300g)</p>
          <small>R$9,90</small>
        </div>
        <div className="card-img">
          <img src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/7f539fc41a5543aebfe03afed73a0b48/BFV9112_MozzarellaStickOnionRings.jpg?resize=1200:*" alt="New-Orleans" />
          <button onClick={() => handleClick(16)}>+ Add</button>
        </div>
      </div>
      <div className="burger">
        <div className="burger-info">
          <h2>Nuggets</h2>
          <p>Porção de (300g)</p>
          <small>R$6,90</small>
        </div>
        <div className="card-img">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Chicken_Nuggets.jpg" alt="New-Orleans" />
          <button onClick={() => handleClick(17)}>+ Add</button>
        </div>
      </div>

    </section>
  )
}

export default Porcoes