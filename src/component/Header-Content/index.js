import React from 'react';
import './index.css';

import seta from '../../image/seta_header_direita.svg'

function Header_Content(){

    return(

        <div className="header-content">

            <div className="content-nav">
                    <div className="title-1-content">
                        <h1>Nascemos de um sonho, para fazer a diferença no mundo</h1>
                    </div>

                    <div className="text-content">
                        <p>
                            Descubra como tudo começou e entenda por que a 
                            Logo Ipsum faz a diferença no mundo. 
                            Há muitos sabores para se deliciar.
                        </p>
                    </div>

                    <div className="arrow-content">

                        <img src={seta}/>

                    </div>
            </div>

        </div>


    );

}

export default Header_Content;