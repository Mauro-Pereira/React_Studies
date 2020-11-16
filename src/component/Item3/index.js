import React from 'react';
import './index.css';

import icon_item3 from '../../image/item3.svg';

function Item3(){
    return(

        <div className="item3-container">

            <div className="img3-container"></div>

            <div className="item-content">
                    <img src={icon_item3} alt="icon"/>

                    <p>
                    Reciclar as embalagens Logo Ipsum é um
                     dos ingredientes da nossa 
                     receita de sucesso.
                    </p>
            </div>
        </div>

    );
}

export default Item3;