import React from 'react';
import './index.css';

import icon_item2 from '../../image/item2.svg';

function Item2(){
    return(

        <div className="item2-container">

            <div className="img2-container"></div>

            <div className="item-content">
                    <img src={icon_item2} alt="icon"/>

                    <p>

                    Matéria-prima 
                    direto do pequeno produtor com 
                    todo o carinho que você merece.


                    </p>
            </div>
        </div>

    );
}

export default Item2;