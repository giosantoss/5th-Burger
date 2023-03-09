import {React, useEffect,useState} from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Burgers from './components/burgers/Burgers'
import Combos from './components/combos/Combos'
import Bebidas from './components/bebidas/Bebidas'
import Porcoes from './components/porções/Porcoes'
import Nav from './components/nav/Nav'

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
      if(cartCount > 0){
        document.title = `(${cartCount}) 5ᵀᴴ Burger`;
      } else {
        document.title = '5ᵀᴴ Burger';
      }
    }, [cartCount]);
  
    const adicionarItem = (item) => {
      setCartCount(prevCount => prevCount + 1);

      setCartItems((prevItems) => {
        const itemIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id);
        if (itemIndex === -1) {
          // O item não existe no carrinho, então adicionamos com quantidade 1
          return [...prevItems, { ...item, quantidade: 1 }];
        } else {
          // O item já existe no carrinho, então atualizamos a quantidade dele
          const updatedItems = [...prevItems];
          updatedItems[itemIndex].quantidade += 1;
          return updatedItems;
        }
      });
    };
    

    const removeFromCart = (id) => {
      setCartCount(prevCount => prevCount - 1);

      setCartItems((prevItems) =>
        prevItems.reduce((newItems, item) => {
          if (item.id === id) {
            // Se o item existe no carrinho, decrementa a quantidade
            if (item.quantidade > 1) {
              return [...newItems, { ...item, quantidade: item.quantidade - 1 }];
            } else {
              return newItems;
            }
          } else {
            return [...newItems, item];
          }
        }, [])
      );
    };
  

  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    const header = document.querySelector('header')
    const firstSection = sections[0]
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const sectionId = entry.target.getAttribute('id')
        const sectionToFade = document.getElementById(sectionId)
  
        if (entry.isIntersecting) {
          sectionToFade.classList.remove('fade-out')
          sectionToFade.classList.add('fade-in')
        } else {
          sectionToFade.classList.remove('fade-in')
          sectionToFade.classList.add('fade-out')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '-100px 0px -200px 0px'
    })
  
    sections.forEach(section => {
      observer.observe(section)
    })
  
    return () => observer.disconnect()
  }, [])
  
  

  return (
    <div id='root'>
        <div className="fixed-header">
          <Header cartCount={cartCount} cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
        <Nav/>
        <div id='home' className='section'>
          <Home />
        </div>
        <div id='burgers' className='section'>
          <Burgers adicionarItem={adicionarItem} cartItems={cartItems}/>
        </div>
        <div id='combos' className='section'>
          <Combos/>
        </div>
        <div id='bebidas' className='section'>
          <Bebidas/>
        </div>
        <div id='porcoes' className='section'>
          <Porcoes/>
        </div>
    </div>
 

  )
}

export default App
