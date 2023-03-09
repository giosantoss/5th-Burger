import React, { useState } from "react";
import '../nav/hambmenu.css'

function HamburgerMenu (props) {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
  
    return (
    <div className="hamburger-menu" onClick={props.onClick}>
        <div className="hamburger-icon" onClick={handleClick}>

            <div className={`icon-bar ${isOpen ? 'rotate-up' : 'rotate-down' ? '' : ''}`}></div>

            <div className={`icon-bar ${isOpen ? 'hide' : ''}`}></div>

            <div className={`icon-bar ${isOpen ? 'rotate-down' : 'rotate-up' ? '' : ''}`}></div>

        </div>
    </div>
    );
    
  }

export default HamburgerMenu