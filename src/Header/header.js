import React from 'react'
import Logo from "../imagens/dell.png"
import Lupa from "../imagens/search.png"
import styled from 'styled-components'

const ContainerHeader = styled.header `
position: fixed;
backgorund-color: rgba(108, 122, 137 / 1);
backdrop-filter: blur(10px);
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
`
const NavOpcoes = styled.nav `
width: 15vw;
ul {
    align-items: center;
}
`
const Search = styled.img `
width: 3.5vw;
padding-top: 10px;
cursor: pointer;
`
const Login = styled.li `
color: #f6f6f6;
`

export default function Header() {
    return(
        <ContainerHeader>
        <LogoSite src={Logo} alt="logo" />
        <NavSeriesFilmes>
            <ul>
                <li>Séries</li>
                <li>Filmes</li>
            </ul>
        </NavSeriesFilmes>
        <NavOpcoes>
            <ul>
                <li> <Search src={Lupa} alt="lupa" /> </li>
                <Login>Login</Login>
            </ul>
        </NavOpcoes>
        </ContainerHeader>
    )
}