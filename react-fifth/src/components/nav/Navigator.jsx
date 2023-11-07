import React,{useState, useEffect} from 'react'
import './navigator.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiCoffeeTogo} from 'react-icons/bi'
import {GiFrenchFries} from 'react-icons/gi'
import Pedido from '../header/Pedido.jsx'

const Navigator = () => {
  const [activeNav, setActiveNav] = useState('#home')
 
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionBottom = sectionTop + section.offsetHeight - 1;
        if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionBottom) {
          const sectionId = `#${section.id}`;
          setActiveNav(sectionId);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    
    <nav id='normal' className='navmenu'>
      <div className="indicator">
        <div className="inside"></div>
      </div>

      <a href="#home" className="nav-link">
        <div onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>
          <span><AiOutlineHome/></span>
          <aside>HOME</aside> 
        </div>
      </a>

      <a href="#burgers" className="nav-link">
        <div onClick={() => setActiveNav('#burgers')} className={activeNav === '#burgers' ? 'active' : ''}>
          <span className="material-symbols-outlined">
            lunch_dining
          </span>
          <aside>BURGERS</aside>
      </div>
      </a>

      <a href="#bebidas" className="nav-link">
        <div onClick={() => setActiveNav('#bebidas')} className={activeNav === '#bebidas' ? 'active' : ''}><span><BiCoffeeTogo/></span><aside>BEBIDAS</aside></div>
      </a>

      <a href="#porcoes" className="nav-link">
        <div onClick={() => setActiveNav('#porcoes')} className={activeNav === '#porcoes' ? 'active' : ''}><span><GiFrenchFries/></span><aside>PORÇÕES</aside></div>
      </a>

      <Pedido/>

    </nav>
  )
}

export default Navigator