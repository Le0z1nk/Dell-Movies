import React from 'react'
import styled from 'styled-components'


const Nav = styled.nav `
background-color: #000000;
color: #f6f6f6;
font-family: 'Open Sans', sans-serif;
align-items: center;
ul {
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: space-around; 
    :hover {
        font-weight: 600;
    }
}
li {
    font-size: 1.3rem;
    cursor: pointer;
   
}
`



export default function NavBar() {

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
        </Nav>
    )
}