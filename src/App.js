import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Series from "./Components/Series";
import Shark from "./Components/logo.png"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
}
body{
  background-color:#023047;
}`
const Logo = styled.div`
margin-left:4rem;
height:2rem;
width:3rem;

@media(max-width:700px){
  display:none;
}`

const Img = styled.img`
width:8rem;
height:10rem;`

const Bar = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
height:5rem;`

const List = styled.ul`
width:40rem;
text-decoration:none;
display:flex;
justify-content:space-evenly;
align-items:center;`

const Listitem = styled(Link)`
text-decoration: none;
color:#fff;
font-size:x-large;
&:hover{
  font-weight:bold;
}`

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Logo>
          <Img src={Shark} alt="logo do site (gymflix)"/>
        </Logo>
        <Bar>
          <List>
           <li><Listitem to="./Home">Home</Listitem></li>
           <li><Listitem to="./Movies">Movies</Listitem></li>
           <li><Listitem to="./Series">Series</Listitem></li>
         </List>
        </Bar>
         <Routes>
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Series" element={<Series />} />
        </Routes>
      </Router>

    );
  }
}
