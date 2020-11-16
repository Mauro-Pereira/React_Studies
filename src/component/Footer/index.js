import React from 'react';
import './index.css';


//import logo from '../../image/Frame.svg';
//import telefone from '../../image/telefone.svg';
//import envelope from '../../image/envelope.svg';

import bottom from '../../image/bottom-icon.svg';


function Footer(){
    return(
     
        <div className="footer-container">
            <div className="footer-top">

                <p className="text-top">
                    Quer receber receitas, dicas e promoções? Vem com a gente. ;)
                </p>

            <div className="form-container">
                
                <div className="labelContainer">
                    <p className="paragrafo-label">Email</p>
                    <p className="paragrafo-label">Nome</p>
                </div>
                
        
                <div className="email-nome-container">
                    <div className="input-container"><p>Seu e-mail</p></div>
                    <div className="input-container"><p>Seu Nome</p></div>
                    <button>Recebe Novidades</button>
                </div>
                    
            </div>

            </div>

            <div className="footer-center"></div>

            <div className="footer-bottom">
                <img src={bottom}/>
            </div>

    </div>

     
      

    );
}

export default Footer;