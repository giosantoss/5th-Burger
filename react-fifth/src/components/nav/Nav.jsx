import React,{useState, useEffect} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiCoffeeTogo} from 'react-icons/bi'
import {GiFrenchFries} from 'react-icons/gi'

const Nav = () => {
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
/*
  const linkToSection = new Map();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const sectionId = link.hash.slice(1);
    linkToSection.set(sectionId, link);
    link.addEventListener('click', e => {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  }); 
*/

  return (
    
    <nav id='mobile' >

      <div onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>
        <a href="#home" className="nav-link">
          <span>
            <AiOutlineHome/>
          </span>
          <aside>HOME</aside>
        </a>
        
      </div>

      <div onClick={() => setActiveNav('#burgers')} className={activeNav === '#burgers' ? 'active' : ''}>
        <a href="#burgers" className="nav-link">
          <span className="material-symbols-outlined">
            lunch_dining
          </span>
          <aside>BURGERS</aside>
        </a>
    </div>

    <div onClick={() => setActiveNav('#combos')} className={activeNav === '#combos' ? 'active' : ''}>
      <a href="#combos" className="nav-link">
        <span className="material-symbols-outlined">
          fastfood
        </span><aside>COMBOS</aside>
      </a>
    </div>

      <div onClick={() => setActiveNav('#bebidas')} className={activeNav === '#bebidas' ? 'active' : ''}>
        <a href="#bebidas" className="nav-link">
          <span><BiCoffeeTogo/></span>
          <aside>BEBIDAS</aside>
        </a>
      </div>

      <div onClick={() => setActiveNav('#porcoes')} className={activeNav === '#porcoes' ? 'active' : ''}>
        <a href="#porcoes" className="nav-link">
          <span><GiFrenchFries/></span>
          <aside>PORÇÕES</aside>
        </a>
      </div>

      <div className="after"></div>

      <div className="indicator"></div>

      

    </nav>
    
      
    
    
  )
}

export default Nav