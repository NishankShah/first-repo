import React from "react";
import { Link } from 'react-router-dom';
import bannerImg from  '../images/restauranfood.jpg'

const Header = () => {
    return(
        
      <header className='header'>
        <section>
            <div>
                <h2>Little Lemon</h2>
                <h3>Chicgo</h3>
                <p>We are a family owned Mediterraneran restrarant, focused on traditional recipes served with a modern wwist.</p>
                  <Link to="/booking"><button aria-label='On Click'>Reserve table</button></Link> 
            </div>
            <div className="banner-img">
                <img src={bannerImg} alt=''/>
            </div>
        </section>
        </header>
      
    );
}

export default Header;

// header done 12:00 