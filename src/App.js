import React from 'react'
import Header from "./Header/header.js"
import Main from "./Main/main.js"
import NavBar from "./Navbar/navbar.js"
import CarouselComponent from "./Carousel/Carousel.js"
import FilmesComponent from "./Filmes/filmes.js"
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

export default function App() {
  return(
    <>
    <GlobalStyle />
      <Header />
      <Main /> 
      <NavBar />
       <CarouselComponent /> 
      <FilmesComponent />
    </>
  )
}
