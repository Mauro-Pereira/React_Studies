import React from 'react';
import './index.css';

import Frame_Logo from '../../image/Frame.svg';
import down_seta from '../../image/down_seta.svg';

function Hero(){

    return(


       <header className="header-container">

            <div className="thumb">
                <div className="menu-container">
                    <div className="logo-container">
                        <img className="frame-logo" src={Frame_Logo} alt="logo"/>
                        
                        <nav className="link-container">
                            <ul>
                                <li>Nossos Produtos</li>
                                <li>Logo Ipsum Transforma</li>
                                <li>Onde Encontrar</li>
                            </ul>
                         </nav>

                        <button className="button">Comprar agora</button>

                        <div className="language-container">

                            <p>
                                BR
                                <img src={down_seta}/>

                            </p>
                            
                        </div>

                    </div>

                    <button className="button2">Comprar agora</button>
                </div>
            </div>
            
        </header>
        
    

    );

}

export default Hero;