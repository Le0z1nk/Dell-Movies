import React, {useState} from 'react'
import Lupa from "../imagens/search.png"
import styled from 'styled-components'

const Nav = styled.nav `
background-color: #000000;
color: #f6f6f6;
font-family: 'Open Sans', sans-serif;
display: flex;
justify-content: space-around;
align-items: center;
ul {
    display: flex;
    list-style: none;
    width: 95%;
    justify-content: space-evenly;
}
li {
    font-size: 1.3rem;
    cursor: pointer;
}
`
const SearchBar = styled.section `
display: flex;
align-items: center;
img {
    width: 3.5vw;
    cursor: pointer;
}
`
const Caixa = styled.input `
display: ${props => props.show};
border-radius: 6px;
`


export default function NavBar() {
    const [mode, setMode] = useState(false)

    return(
        <Nav>
            <ul>
                <li>Popular</li>
                <li>Drama</li>
                <li>Ação</li>
                <li>Aventura</li>
                <li>Comédia</li>
                <li>Crime</li>
                <li>Fantasia</li>
                <li>Família</li>
            </ul>
            <SearchBar>
                <img onClick={() => setMode(!mode)} src={Lupa} alt="" />
                <Caixa show={mode === false ? 'none' : 'initial'} />
            </SearchBar>
        </Nav>
    )
}
