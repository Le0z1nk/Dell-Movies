import React, {useState} from 'react'
import styled from 'styled-components'
import MenuStyle from './menu_style.js'

const Section = styled.section `
width: 15vw;
`
const Botao = styled.button `
font-size: 2.5rem;
color: white;
border: none;
background-color: transparent;
transition: 0.5s;
:hover {
    color: #747474;
    transition: 0.5s;
}
`

export default function MenuComponent() {
    const [on, setOn] = useState(false);

  const openMenu = () => {
    setOn(!on);
  };

  return (
    <Section>
      <Botao
        onClick={() => {openMenu();}}>  ☰ </Botao>

      {on && <MenuStyle />}
    </Section>
  )
}