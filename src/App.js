import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import CreativeThinkingUrl from './assets/img/creative-thinking.png'
import EscolharOMelhorUrl from './assets/img/escolhaOMelhor.jpg'
import Box from './components/Box';

import Acordeao from './components/Acordeao';

function App() {

  const [formName, setFormName] = useState('');
  const [formPassword, setFormPassword] = useState('');

  const handleName = (event) => {
    setFormName(event.target.value.toUpperCase())
  }

  const handlePassword = (event) => {
    setFormPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    
    console.log(formName, formPassword)
    //setar estado de loading
    setFormName('')
    setFormPassword('')
    alert('Formulario enviado!')
    // fetch('heroku.com/yourdev/addProduct',{
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: formName,
    //     password: formPassword
    //   })
    // }).then(res => res.json())
    // .then(json => {
    //   // fazer o que quiser com o json
      
    //   // setar estado de loadin falso
    // }).catch(error => {
    //   // setar estado de loadin falso
    //   if(error.type == 'Non Authenticated'){
    //     // setar estado true popup nao autenticado
    //   }
    //   console.log(error)
    // })

    event.preventDefault();
  }

  return (
    <div className="section__comoFunciona">
      <div className="section__comoFuncionaTitle">
        <h1>Como funciona?</h1>
        <p>  Desenvolva sua ideia e o seu site com a gente e aproveite! </p>
      </div>
      <section className="section__comoFunciona_content">
        <section class="container">
          <Box imgUrl={CreativeThinkingUrl} text="Tem uma ideia, serviço ou produto?"/>
          <Box imgUrl={EscolharOMelhorUrl} text="Tenha uma reunião online com nossa equipe"/>
          <Box text="Objetivo alcançado ! Aproveite seu site!"/>
          <Box text="Escolha o melhor plano para o seu negócio!"/>
          <Box text="Receba entregas do seu site durante a criação"/> 
        </section>
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input value={formName} onChange={handleName}></input>
          <label>Senha</label>
          <input type="password" value={formPassword} onChange={handlePassword}></input>
          <input type='submit' value="Confirmar"></input>
        </form>

        {/* <Acordeao/> */}
      </section>
    </div>
  );
}

export default App;
