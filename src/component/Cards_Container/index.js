import React from 'react';
import './index.css';

import Card1 from '../Card1/index';
import Card2 from '../Card2/index';
import Card3 from '../Card3/index';
import IconCard from '../Icon_Card/index';




function CardContainer(){
    return(

        <div className="card-container">


            <div className="card-text-container">
                <div className="card-text-container-nav">
                    <h1>É a sua vez de fazer bem + feliz!</h1>

                    <p>
                        Os melhores sabores se misturam em várias publicações imperdíveis. 
                        Já conferiu? Fique por dentro de tudo que fazemos:
                        acompanhe projetos que apoiamos, 
                        dicas, receitas e muito mais!
                    </p>

                    <div className="button-container">
                        <button className="energy-button">Fique Ligado</button>
                    </div>


                </div>
            </div>

            <Card1/>
            <Card2/>
            <Card3/>
            <IconCard/>

        </div>
    );
}

export default CardContainer;