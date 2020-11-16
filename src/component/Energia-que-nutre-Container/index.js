import React from 'react';
import './index.css';

import text_logo from '../../image/svg_img.svg';
import play from '../../image/play.svg';

function Energia(){
    return (
    <>
        <div className="energia-container">
            <div className="text-energy-container">
                <h1 className="title">Energia que nutre o esporte.</h1>
                <div className="energy-text-content">
                    <p>
                        Quando você coloca suas granolas e alimentos favoritos na sacola, 
                        tenha certeza de que o seu pedido está ajudando a 
                        fazer acontecer algum projeto no esporte.
                    </p>

                    <p>
                        Nos nossos mais de 20 anos de história, 
                        apoiamos grupos esportivos e atletas de várias modalidades: triathlon, 
                        mountain bike, ciclismo, 
                        corrida, jiu-jitsu, canoagem, stand up paddle, 
                        judô e corrida de aventura, por exemplo.
                    </p>

                    <p>
                        É assim que a Logo Ipsum nutre o esporte com toda a energia que ele merece. 
                        Fazemos questão de estar presentes sempre. 
                        E lembre-se: você é parte importante dessa saudável relação.
                    </p>

                </div>

                <div className="button-container">
                    <button className="energy-button">Saiba Mais</button>
                </div>

            </div>

            
            <img className="play" src={play} alt="play"/>
                
            <div className="image-energy-container">
                <img src={text_logo} alt="logo"/>
            </div>

        </div>

    </>

    );
}

export default Energia;