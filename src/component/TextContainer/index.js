import React from 'react';
import './index.css';

import instagramIcon from '../../image/Instagram.svg';

function TextContainer(){
    return(

        <div className="text-container">

            <img src={instagramIcon} alt="instagram"/>

            <h1>
                 O que faz bem mais feliz é feito pra compartilhar.
            </h1>

            <p>#logoipsum</p>

        </div>

    );
}

export default TextContainer;