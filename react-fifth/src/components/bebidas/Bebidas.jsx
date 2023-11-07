import React,{useState} from 'react'

function Bebidas(props) {
  const { adicionarItem } = props;

  const [bebidas, setBebidas] = useState([
    { id: 12, name: 'Coca-cola', price: 4.90 },
    { id: 13, name: 'Guaraná', price: 4.90 },
    { id: 14, name: 'Sprite', price: 4.90 },
  ]);

  const handleClick = (id) => {
    const item = bebidas.find((bebidas) => bebidas.id === id);
    adicionarItem(item);
  };

  return (
    <section id='bebidas' className='cardapio'>
      <h1>BEBIDAS</h1>
      <div className="burger">
        <div className="burger-info">
          <h2>Coca-cola</h2>
          <p>Refrigerante em lata (350ml)</p>
          <small>R$4,90</small>
        </div>
        <div className="card-img">
          <img src="https://naturaldaterra.com.br/media/catalog/product/1/0/104192---7894900010015---refrigerante-coca-cola-lata-350ml.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover" alt="New-Orleans" />
          <button onClick={() => handleClick(12)}>+ Add</button>
        </div>
      </div>
      <div className="burger">
        <div className="burger-info">
          <h2>Guaraná</h2>
          <p>Refrigerante em lata (350ml)</p>
          <small>R$4,90</small>
        </div>
        <div className="card-img">
          <img src="https://naturaldaterra.com.br/media/catalog/product/1/2/125582---90148---refri-nt-guaran-antarct-lt-350ml.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover" alt="New-Orleans" />
          <button onClick={() => handleClick(13)}>+ Add</button>
        </div>
      </div>
      <div className="burger">
        <div className="burger-info">
          <h2>Sprite</h2>
          <p>Refrigerante em lata (350ml)</p>
          <small>R$4,90</small>
        </div>
        <div className="card-img">
          <img src="https://naturaldaterra.com.br/media/catalog/product/1/2/123353-refrigerante-sprite-lata-350ml.jpg?auto=webp&format=pjpg&width=160&height=200&fit=cover" alt="New-Orleans" />
          <button onClick={() => handleClick(14)}>+ Add</button>
        </div>
      </div>
    </section>
    
  )
}

export default Bebidas