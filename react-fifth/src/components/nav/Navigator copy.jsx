import React,{useState, useEffect} from 'react'
import './navigator.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiCoffeeTogo} from 'react-icons/bi'
import {GiFrenchFries} from 'react-icons/gi'


const Navigator = () => {
  const [activeNav, setActiveNav] = useState('#home')
  const [fadeInSection, setFadeInSection] = useState('home')

  useEffect(() => {
    const sectionToFadeIn = document.getElementById(fadeInSection)
    if (sectionToFadeIn) {
      sectionToFadeIn.classList.add('fade-in')
      setTimeout(() => {
        sectionToFadeIn.classList.remove('fade-in')
      }, 1000) // Tempo em milissegundos do efeito de fade-in
    }
  }, [fadeInSection])

  return (
    
    <nav id='normal' className='navmenu'>
      <div className="indicator">
        <div className="inside"></div>
      </div>

      <a href="#home" className="nav-link">
        <div onClick={() => {setActiveNav('#home');}} className={activeNav === '#home' ? 'active' : ''}>
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

      <a href="#combos" className="nav-link">
        <div onClick={() => setActiveNav('#combos')} className={activeNav === '#combos' ? 'active' : ''}>
          <span className="material-symbols-outlined">
            fastfood
          </span><aside>COMBOS</aside>
        </div>
      </a>

      <a href="#bebidas" className="nav-link">
        <div onClick={() => setActiveNav('#bebidas')} className={activeNav === '#bebidas' ? 'active' : ''}><span><BiCoffeeTogo/></span><aside>BEBIDAS</aside></div>
      </a>

      <a href="#porcoes" className="nav-link">
        <div onClick={() => setActiveNav('#porcoes')} className={activeNav === '#porcoes' ? 'active' : ''}><span><GiFrenchFries/></span><aside>PORÇÕES</aside></div>
      </a>
    </nav>
  )
}
export default Navigator