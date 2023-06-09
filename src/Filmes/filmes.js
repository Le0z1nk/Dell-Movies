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
width: 19.7vw;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1.2rem;
img {
    width: 85%;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transform: scale(1.05);
    }
}
@media (min-width: 201px) and (max-width: 500px) {
  width: 25vw;
}
`
const FilmesName = styled.h3 `
color: #f6f6f6;
font-size: 18px;
text-align: center;
margin-top: 0.3rem;
@media (min-width: 201px) and (max-width: 500px) {
  font-size: 17px;
}
`
const FilmesDate = styled.h4 `
color: #f6f6f6;
font-weight: 100;
font-size: 16px;
`
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
@media (min-width: 201px) and (max-width: 500px) {
  button {
    width: 10vw;
    height: 5vh;
  }
}
@media (min-width: 501px) and (max-width: 900px) {
   button {
    width: 5vw;
    height: 4vh;
   }
  }
`

export default function FilmesComponent() {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(false)
    const [index, setIndex] = useState(1)
    useEffect(() => {
        let isMounted = true; // Flag para rastrear se o componente está montado
    
        const fetchData = async () => {
          if (!loading) { // Verifica se a requisição já está em andamento
            try {
              setLoading(true); // Define o estado de carregamento como verdadeiro
    
              const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=245d127d88e8f74e03ac81ed84b075f2&language=pt-BR&page=${index}`); // Realiza a requisição
    
              if (isMounted) {
                setFilmes(response.data.results); // Atualiza o estado dos dados
                console.log(response.data.results)
              }
            }
            catch (error) {
                console.error(error);
              } finally {
                setLoading(false); // Define o estado de carregamento como falso, independentemente do resultado da requisição
              }
            }
          };
      
          fetchData();
      
          return () => {
            isMounted = false; // Define a flag para false quando o componente é desmontado
          };
        }, [index]); // O segundo argumento vazio [] garante que o useEffect seja executado apenas uma vez durante a montagem do componente

    return(
      <>
        <ContainerFilmes>
            <BoxTitle>
            <FilmesTitle>Em Alta</FilmesTitle> 
            </BoxTitle>
            {filmes.map((item) => (
                <BoxFilmes>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} loading="lazy" />
                    <FilmesName>{item.title}</FilmesName>
                    <FilmesDate>{item.release_date.slice(0,4)}</FilmesDate>
                </BoxFilmes>
            ))}
        </ContainerFilmes>
        <ContainerPaginas>
        <button onClick={() =>{setIndex(prevState => prevState = 1)}}>1</button>
        <button onClick={() =>{setIndex(prevState => prevState = 2)}}>2</button>
        <button onClick={() =>{setIndex(prevState => prevState = 3)}}>3</button>
        <button onClick={() =>{setIndex(prevState => prevState = 5)}}>4</button>
        <button onClick={() =>{setIndex(prevState => prevState = 6)}}>5</button>
        </ContainerPaginas>
        </>
    )
}