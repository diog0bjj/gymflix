import React from "react";
import styled from "styled-components";
import Vnw from "./vnw-logo.png"

const Allpage = styled.div`
border-top:solid black;
margin-top:1.5rem;
padding-top:1.5rem;
width:100vw;
height:70vh;
display:flex;
flex-wrap:wrap;
justify-content: space-evenly;
`

const Textpart = styled.div`
border:solid black;
padding:2rem;
border-radius:15px;
background-color:#FFF;
display:flex;
align-items:center;
justify-content:space-around;
padding:2rem;
flex-direction:column;
text-position:center;
width:18rem;
height:20rem;
margin-bottom:2rem;
`

const Vnwpart = styled.div`
height:20rem;
width:18rem;
background-color:#fff;
border:solid black;
padding:2rem;
border-radius:15px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export default class Home extends React.Component {
  render() {
    return (
        <Allpage>
            <Textpart>
                <h1>Gymflix</h1>
                <h3>escolha o que vai assistir</h3>
                <h3>Pegue um lanchinho</h3>
                <h3> aproveite o momento!!!</h3>
            </Textpart>
            <Vnwpart>
                <h3>Conheça um pouco mais sobre o VNW</h3>
                <a href="https://www.vainaweb.com.br/" target="_blank"><img src={Vnw} alt="logo do vai na web"/></a>
            </Vnwpart>
        </Allpage>
    );
  }
}