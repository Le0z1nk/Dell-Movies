import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerFilmes = styled.section `
background-color: #000000;
display: flex;
flex-wrap: wrap;
font-family: 'Open Sans', sans-serif;
`
const BoxTitle = styled.section `
width: 100%;
`
const FilmesTitle = styled.h2 `
color: #ffffff;
margin-left: 3.5rem;
font-size: 2rem;
height: 15vh;
display: flex;
align-items: center;
`
const BoxFilmes = styled.section `
width: 20%;
display: flex;
flex-direction: column;
align-items: center;
img {
    width: 85%;
}
`
const FilmesName = styled.h3 `
color: #f6f6f6;
font-size: 19px;
margin-top: 0.4rem;
text-align: center;

`

export default function FilmesComponent() {
    const [filmes, setFilmes] = useState([])
    const [input, setInput] = useState('')
    const [filtrados, setFiltrados] = useState([])

    useEffect(() => {
        getFilmes()
        filtrar()
    }, [input, filmes, filtrados])

    const getFilmes = async() => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=245d127d88e8f74e03ac81ed84b075f2&language=pt-BR&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
              return{
                 ...item,
                 image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
              }
            })
            setFilmes(allApi)
        }).catch(error => alert(`desculpe, você teve um erro de requisição ${error}`))
    }
    const filtrar = () => {
        const filtros = filmes.filter((item) => {
            if (item.title.toLowerCase().includes(input.toLocaleLowerCase())){
                return true
            }else{
                return false
            }
        })
        setFiltrados(filtros)
    }

    return(
        <ContainerFilmes>
            <BoxTitle>
            <FilmesTitle>Em Alta</FilmesTitle> 
            </BoxTitle>
            {filtrados.map((item) => (
                <BoxFilmes>
                    <img src={item.image} alt={item.title} />
                    <FilmesName>{item.title}</FilmesName>
                </BoxFilmes>
            ))}
        </ContainerFilmes>
    )
}