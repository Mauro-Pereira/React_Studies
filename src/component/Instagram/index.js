import React from 'react';
import './index.css';

import food from '../../image/food.png';
import embalagem from '../../image/Embalagem.png';
import embalagem2 from '../../image/Embalagem2.png';
import peaple from '../../image/peaple.png';




function InstagramContainer(){
    return(

        <div className="instagram-container">
            <div className="icontinstagram-content">
                <div className="icon1-instagram"></div>
                <div className="icon2-instagram"></div>
            </div>
            
                <img src={food} alt="food"/>
                <img src={embalagem} alt="embalagem"/>
                <img src={embalagem2} alt="embalagem"/>
                <img className="peaple" src={peaple} alt="peaple"/>

        </div>

    );
}

export default InstagramContainer;