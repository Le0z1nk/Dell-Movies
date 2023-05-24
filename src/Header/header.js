import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Logo from "../imagens/dell.png"
import Lupa from "../imagens/search.png"
import styled from 'styled-components'
import Main from "../Main/main.js"
import Series from "../Series/series_main.js"

const ContainerHeader = styled.header `
position: fixed;
backgorund-color: rgba(108, 122, 137 / 1);
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
`
const LogoSite = styled.img `
height: 10vh;
margin-left: 1rem;

`
const NavSeriesFilmes = styled.nav `
width: 20vw;
li {
    background-color: #747474;
    border-radius: 50px;
    text-align: center;
    width: 8vw;
    :hover {
        color: #000000;
        transition: 0.4s;
    }
    .active {
        color: #000000;
    }
    
}
a {
    color: white;
    text-decoration: none;
}
`
const NavOpcoes = styled.nav `
width: 17vw;
ul {
    align-items: center;
}
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
animation: caixa 0.4s linear 1 normal both;

@keyframes caixa {
    0% {
        width: 10%;
    }
    50% {
        width: 30%;
    }
    100% {
        width: 50%;
    }
}
`
const Login = styled.li `
color: #f6f6f6;
&:hover {
    color: #000000;
    transition: 0.5s;
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
        </ContainerHeader>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/series" element={<Series />} />
        </Routes>
        </BrowserRouter>
    )
}