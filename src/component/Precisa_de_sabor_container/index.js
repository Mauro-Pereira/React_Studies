import React from 'react';
import './index.css';

import saborImage from '../../image/joice_image.svg';


function SaborContainer(){
    return(

        <div className="sabor-container">
            <div className="image-container">
                <img className="sabor-image" src={saborImage} alt="sabor image"/>
            </div>

            <div className="sabor-text-container">
                <h1>Precisa do sabor de alimentos naturais feitos com amor?</h1>

                <p>
                    Alimentos naturais feitos com carinho, 
                    sabor e qualidade. 
                    Tudo para dar a energia que
                    você precisa para o seu dia.
                </p>

                <div className="button-container">
                    <button className="energy-button">Comprar Agora</button>
                </div>

            </div>
        </div>

    );
}

export default SaborContainer;