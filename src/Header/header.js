import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Logo from "../imagens/dell.png"
import Lupa from "../imagens/search.png"
import styled from 'styled-components'
import Main from "../Main/main.js"
import Series from "../Series/series_main.js"
import Menu from "./menu.js"

const ContainerHeader = styled.header `
position: fixed;
background-color: rgba(108, 122, 137 / 1);
backdrop-filter: blur(20px);
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 13vh;
font-family: 'Open Sans', sans-serif;
ul {
    display: flex;
justify-content: space-evenly;
list-style: none;
font-size: 1.5rem;
color: #ffffff;
}
li {
    cursor: pointer;
}
@media (min-width: 201px) and (max-width: 500px) {
 width: 100%;  
}
`
const LogoSite = styled.img `
height: 10vh;
margin-left: 1rem;
@media (min-width: 201px) and (max-width: 500px) {
   
}

`
const NavSeriesFilmes = styled.nav `
width: 20vw;
li {
    background-color: #747474;
    border-radius: 50px;
    text-align: center;
    width: 8vw; 
}
a {
    color: white;
    text-decoration: none;
    :hover {
        color: #000000;
        transition: 0.5s;
    }
    &.active {
        color: #000000;
    }
}
@media (min-width: 201px) and (max-width: 500px) {
   display: none;
}
`
const NavOpcoes = styled.nav `
width: 17vw;
ul {
    align-items: center;
}
@media (min-width: 201px) and (max-width: 500px) {
   display: none;
}
`
const Search = styled.img `
width: 3.5vw;
padding-top: 10px;
cursor: pointer;
`
const Caixa = styled.input `
display: ${props => props.show};
width: 8vw;
border-radius: 6px;
border: none;
position: relative;
right: 1rem;
`
const Login = styled.li `
color: #f6f6f6;
transition: 0.5s;
&:hover {
    color: #747474;
    transition: 0.5s;
}
`
const DivMenu = styled.div `
display: none;
@media (min-width: 201px) and (max-width: 500px) {
   display: flex;
}
`

export default function Header() {
    const [mode, setMode] = useState(false)
    return(
        <BrowserRouter>
        <ContainerHeader>
        <LogoSite src={Logo} alt="logo" />
        <NavSeriesFilmes>
            <ul>
                <li><NavLink to="series">Séries</NavLink></li>
                <li><NavLink to="/">Filmes</NavLink></li>
            </ul>
        </NavSeriesFilmes>
        <NavOpcoes>
            <ul>
                <li> <Search onClick={() => setMode(!mode)} src={Lupa} alt="lupa" /> </li>
                <Caixa show={mode === false ? 'none' : 'initial'} />
                <Login>Login</Login>
            </ul>
        </NavOpcoes>
        <DivMenu>
            <Menu />
        </DivMenu>
        </ContainerHeader>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/series" element={<Series />} />
        </Routes>
        </BrowserRouter>
    )
}