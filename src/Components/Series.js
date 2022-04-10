import React from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const mbdApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=da58f0b0f0474d4b12e9c7252c93dd54&language=pt-BR&page=1",
});

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`

const AllPage = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;`

const Principal = styled.div`
width:70vw;
display:flex;
justify-content:flex-end;`

const Searchbar = styled.input`
margin-top:1.5rem;
border-radius:15px;
width:17rem;
height:2rem;`

const Allmovies = styled.div`
margin-top: 1rem;
`

const H1 = styled.h1`
margin-left:5vw;
padding-bottom:3rem;
color: #fff;

@media(max-width:700px){
    margin-left:3rem;
  }`

const Exhibition = styled.div`
display:flex;
flex-wrap:wrap;
margin-bottom:3rem;
justify-content:space-evenly;`

const Sinopse = styled.div`
text-position:left;
font-size:x-small;
color: #fff;`

const Movietitle = styled.div`
color: #FFB703;`

const Infos = styled.div`
width:20rem;
height:14rem;
display:flex;
flex-direction:column;
justify-content:space-evenly;`


const Cover = styled.img`
width:17rem;
height:14rem;
border:solid black;
margin:0.5rem;`

export default class Movies extends React.Component {
  state = {
    mySeries: [],
    searchList: []
  };

  async componentDidMount() {

    const request = await mbdApi.get();
    console.log(request.data.results);
    const SerieList = request.data.results.map((item) => {
      return {
        ...item, poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      };
    });
    this.setState({
      mySeries: SerieList,
      searchList: SerieList,
    });
  }

  search = (event) => {
    const { mySeries } = this.state;

    const finalSerie = mySeries.filter((item) => {
      if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      } 
      
    });
    this.setState({
      searchList: finalSerie,
    });
  };

  render() {
    return (
      <AllPage>
        <GlobalStyle />
        <Principal>
            <Searchbar  onChange={this.search} placeholder="Busque sua série aqui..." />
        </Principal>
        <Allmovies>
            <H1>Nossas Séries</H1>
          {this.state.searchList.map((item) => (
            <Exhibition>
                <div>
                    <Cover src={item.poster_path} alt={item.name} />
                </div>
                <div>
                    <Infos>
                        <Movietitle>
                            <h2>{item.name}</h2>
                        </Movietitle>
                        <Sinopse>                        
                            <p>{item.overview}</p>
                        </Sinopse>
                    </Infos>
                </div>
            </Exhibition>
          ))}
        </Allmovies>
      </AllPage>
    );
  }
}