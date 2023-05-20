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
img {
    width: 85%;
}
`
const FilmesName = styled.h3 `
color: #f6f6f6;
font-size: 18px;
margin-top: 0.4rem;
text-align: center;

`

export default function FilmesComponent() {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        let isMounted = true; // Flag para rastrear se o componente está montado
    
        const fetchData = async () => {
          if (!loading) { // Verifica se a requisição já está em andamento
            try {
              setLoading(true); // Define o estado de carregamento como verdadeiro
    
              const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=245d127d88e8f74e03ac81ed84b075f2&language=pt-BR&page=1'); // Realiza a requisição
    
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
        }, []); // O segundo argumento vazio [] garante que o useEffect seja executado apenas uma vez durante a montagem do componente

    /* const [input, setInput] = useState('') */
    /* const [filtrados, setFiltrados] = useState([]) */

    /* useEffect(() => {
        getFilmes()
        
       
    }, []) */

   /*  const getFilmes = async(e) => {
        
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=245d127d88e8f74e03ac81ed84b075f2&language=pt-BR&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
              return{
                 ...item,
                 image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
              }
            })
            setFilmes(oldList => [...oldList, allApi])
            
            
        }).catch(error => alert(`desculpe, você teve um erro de requisição ${error}`))
        e.preventDefault()
    } */
    /* const filtrar = () => {
        const filtros = filmes.filter((item) => {
            if (item.title.toLowerCase().includes(input.toLowerCase())){
                return true
            }else{
                return false
            }
        })
        setFiltrados(filtros)
    } */

    return(
        <ContainerFilmes>
            <BoxTitle>
            <FilmesTitle>Em Alta</FilmesTitle> 
            </BoxTitle>
            {filmes.map((item) => (
                <BoxFilmes>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} loading="lazy" />
                    <FilmesName>{item.title}</FilmesName>
                </BoxFilmes>
            ))}
        </ContainerFilmes>
    )
}