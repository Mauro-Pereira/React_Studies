import React from 'react';
import './index.css';

import icon_item1 from '../../image/icon.svg';

function Item1(){
    return(

        <div className="item1-container">

            <div className="img1-container"></div>

            <div className="item-content">
                    <img src={icon_item1} alt="icon"/>

                    <p>
                        Logo
                        Ipsum Transforma: 
                        projetos que fazem bem,
                        bem mais feliz.
                    </p>
            </div>
        </div>

    );
}

export default Item1;