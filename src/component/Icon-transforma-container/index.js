import React from 'react';
import './index.css';

import setaDireita from '../../image/seta_transforma_direita.svg';
import setaEsquerda from '../../image/seta_transfroma_direita.svg';

function IconTransforma(){
    return(

        <div className="icon-transforma-container">
            <div className="icon-image-transfroma-container">
                <img src={setaEsquerda} alt="esquerda"/>
            </div>

            <div className="icon-image-transfroma-container">
                <img src={setaDireita} alt="direita"/>
            </div>
        </div>

    );
}

export default IconTransforma;