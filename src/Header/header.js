import React, {useState} from 'react'
import Logo from "../imagens/dell.png"
import Lupa from "../imagens/search.png"
import styled from 'styled-components'

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
`
const NavOpcoes = styled.nav `
width: 17vw;
ul {
    align-items: center;
    :hover {
    font-weight: 600;
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
animation: caixa 0.5s ease-in-out 1 normal both;

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

`

export default function Header() {
    const [mode, setMode] = useState(false)
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
                <li> <Search onClick={() => setMode(!mode)} src={Lupa} alt="lupa" /> </li>
                <Caixa show={mode === false ? 'none' : 'initial'} />
                <Login>Login</Login>
            </ul>
        </NavOpcoes>
        </ContainerHeader>
    )
}