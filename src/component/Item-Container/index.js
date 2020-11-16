import React from 'react';
import './index.css';

import Item1 from '../Item1/index';
import Item2 from '../Item2/index';
import Item3 from '../Item3/index';

function ItemContainer(){
    return(

        <div className="item-nav-container">

            <Item1/>
            <Item2/>
            <Item3/>

        </div>

    );
}

export default ItemContainer;