import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Container = styled.section `
height: 1px;
  position: relative;
  margin-top: 0.5rem;
  margin-right: 1rem;
  right: 6rem;
`
const MenuNav = styled.nav `
 width: 40vw;
  height: 40vh;
  background: linear-gradient(180deg, #747474, #0C0424);
  margin-right: 2rem;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 40vh;
    width: 80%;
    text-align: center;
    padding-left: 2.5rem;
  }
  li {
    list-style: none;
    color: #f2f2f2;
    font-size: 2rem;
    font-family: 'Open Sans', sans-serif;
    transition: 0.5s;
    :hover {
        color: #000000;
        transition: 0.5s;
    }
  }
  a {
    color: #f2f2f2;
    text-decoration: none;
    transition: 0.5s;
    :hover {
        color: #000000;
        transition: 0.5s;
    }
    &.active {
      color: #000000;
    }
  }
`

export default function MenuStyles() {
    return(
        <Container>
        <MenuNav>
            <ul>
                <li><NavLink to="series">Séries</NavLink></li>
                <li><NavLink to="/">Filmes</NavLink></li>
                <li>Login</li>
            </ul>
        </MenuNav>
        </Container>
    )
}