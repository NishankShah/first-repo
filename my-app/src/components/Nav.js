import React, {useState} from "react";
import logo from  '../images/Logo .svg'

const Nav =() => {
const [menuOpen, setmenuOpen] = useState(false);
const toggleMenu = () => {
    setmenuOpen(!menuOpen);
}

    return (
   <nav className={`navbar ${menuOpen ? "open" : ""} `}>
   <a href='/' className="logo">
    <img src={logo} alt='logo'/>
   </a>
  
   <div className="menu-icon" onClick={toggleMenu}>
    <div className='bar'></div>
    <div className='bar'></div>
    
    <div className='bar'></div>
    
    <div className='bar'></div>
   </div>
   <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
    <li>
        <a href="/">Home</a>
    </li>
    <li>
        <a href="/">About</a>
    </li>
    <li>
        <a href="/">Service</a>
    </li>
    <li>
        <a href="/">Reservetations</a>
    </li>
    <li>
        <a href="/">order online</a>
    </li>
    <li>
        <a href="/">Logins</a>
    </li>
   </ul>
   </nav>

    )
}

export default Nav;