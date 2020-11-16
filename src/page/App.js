import React from 'react';
import './index.css';

import Hero from '../component/Header/index';
import HeaderContent from '../component/Header-Content/index';
import ItemContainer from '../component/Item-Container/index';
import EnergiaContainer from '../component/Energia-que-nutre-Container/index';
import SaborContainer from '../component/Precisa_de_sabor_container/index';
import CardContainer from '../component/Cards_Container/index';
import Instagram from '../component/Instagram/index';
import TextContainer from '../component/TextContainer/index';
import Transforma from '../component/TransformaContainer/index';
import IconTransforma from '../component/Icon-transforma-container/index';
import FacaParte from '../component/faça-parte-container/index';
import Footer from '../component/Footer/index';
import MontainIcon from '../component/montain_icon/index'


function App() {
  return (
    <div className="app">

      <Hero/>
      <HeaderContent/>
      <ItemContainer/>
      <EnergiaContainer/>
      <SaborContainer/>
      <CardContainer/>
      <Instagram/>
      <TextContainer/>
      <Transforma/>
      <IconTransforma/>
      <FacaParte/>
      <Footer/>
      <MontainIcon/>

    </div>
  );
}

export default App;
