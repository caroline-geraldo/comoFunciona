import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



import CreativeThinkingUrl from './assets/img/cardescolha.svg'
import EscolharOMelhorUrl from './assets/img/cardmeeting.svg'
import RecebaEntregasUrl from './assets/img/cardwebsite.svg'
import ObjetivoAlcancado from './assets/img/cardfoguete2.svg'

import Box from './components/Box';

import Acordeao from './components/Acordeao';

function App() {


  return (
    <div className="section__comoFunciona">
      <div className="section__comoFuncionaTitle">
        {/*<h1>Como funciona?</h1>
        <p>  Desenvolva sua ideia e o seu site com a gente e aproveite! </p>*/}
      </div>
      <section className="section__comoFunciona_content">
        <section class="container">
          <Box imgUrl={CreativeThinkingUrl} />
          <Box imgUrl={EscolharOMelhorUrl} text=""/>
          <Box imgUrl={RecebaEntregasUrl} text=""/>
          <Box imgUrl={ObjetivoAlcancado} text="                    "/>
         {/* <Box text="Receba entregas do seu site durante a criação"/> */}
        </section>
      

        
      </section>
    </div>
  );
}

export default App;
