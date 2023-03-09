import React,{useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiCoffeeTogo} from 'react-icons/bi'
import {GiFrenchFries} from 'react-icons/gi'

const Nav = () => {
  
  const [activeNav, setActiveNav] = useState('#home')

  // Armazena as seções em uma variável global
  const sections = document.querySelectorAll('.section');

  // Atualiza as informações das seções sempre que a janela for redimensionada
  function updateSectionInfo() {
    sectionInfo.clear();
    sections.forEach(section => {
      sectionInfo.set(section.id, {
        top: section.offsetTop,
        height: section.clientHeight
      });
    });
  }

  // Armazena as informações das seções em um mapa global
  const sectionInfo = new Map();
  updateSectionInfo();

  // Cria um mapa de links para seções
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
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    let activeLink = null;

    // Verifica cada seção para ver se está visível
    sectionInfo.forEach((info, sectionId) => {
      if (scrollPosition >= info.top - info.height / 3 && scrollPosition < info.top + info.height - info.height / 3) {
        activeLink = linkToSection.get(sectionId);
      }
    });

    // Adiciona a classe "active" apenas se o link ainda não a tiver
    navLinks.forEach(link => {
      if (link === activeLink) {
        if (!link.classList.contains('active')) {
          link.classList.add('active');
        }
      } else {
        link.classList.remove('active');
      }
    });
  });

  // Atualiza as informações das seções sempre que a janela for redimensionada
  window.addEventListener('resize', () => {
    updateSectionInfo();
  });

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