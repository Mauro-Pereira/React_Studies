import React from 'react';
import './index.css';
import atletaIcon from '../../image/grenn_button_icon.svg';
import parceirosIcon from '../../image/parceiros_icon.svg';
import equipeIcon from '../../image/equipe_icon.svg';



function TransformaContainer(){
    return(

        <div className="transforma-container">

            <div className="transforma-top">

                <h1>Logo Ipsum transforma o esporte.</h1>

                <p>
                    Ao longo da nossa história, 
                    apoiamos atletas e grupos esportivos
                    de diversas modalidades. Queremos estar presentes sempre.
                </p>

                <div className="buttons-list">
                    <button className="green-button">
                        <img src={atletaIcon} alt="icon"/>
                        Atletas
                    </button>
                    <button className="white-button">
                        <img src={equipeIcon} alt="icon"/>
                        Equipes
                    </button>
                    <button className="white-button">
                        <img src={parceirosIcon} alt="icon"/>
                        Parceiros
                    </button>
                </div>

            </div>

            <div className="transforma-bottom">

                <div className="transforma-card-1">
                    <div className="card-transforma-image-1"></div>
                    <h1>José Batista</h1>
                    <p>Atletismo</p>
                </div>

                <div className="transforma-card-2">
                    <div className="card-transforma-image-2"></div>
                    <h1>Kleber Amaral</h1>
                    <p>Atletismo</p>
                </div>

                <div className="transforma-card-3">
                    <div className="card-transforma-image-3"></div>
                    <h1>Issac Ferraz</h1>
                    <p>Trail Running</p>
                </div>

                <div className="transforma-card-4">

                    <div className="card-transforma-image-4"></div>
                    <h1>Juscelino Oliveira</h1>
                    <p>Atletismo</p>
                </div>

            </div>

        </div>

    );
}

export default TransformaContainer;