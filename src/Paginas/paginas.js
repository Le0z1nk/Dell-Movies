import React from 'react'
import styled from 'styled-components'

const ContainerPaginas = styled.section `
background-color: #000000;
height: 15vh;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Open Sans', sans-serif;
gap: 10px;
button {
    background-color: #000000;
    color: #ffffff;
    width: 3vw;
    height: 7vh;
    border: solid 1px white;
    border-radius: 100px;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
        background-color: #ffffff;
        color: #000000;
    }
}
`

export default function Paginaçao() {
    return(
        <ContainerPaginas>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        </ContainerPaginas>
    )
}