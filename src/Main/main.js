import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerMain = styled.main `
background-image: url(${props => props.back})
background-repeat: no-repeat;
background-size: 100% 100%;
height: 100vh;
color: white;
div{
    margin-top: 18rem;
}
`


export default function Main() {
    const [filmes, setFilmes] = useState([])
    const [fundo, setFundo] = useState([])

    useEffect(() => {
        getFilmes()
    }, [])

    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=245d127d88e8f74e03ac81ed84b075f2&language=pt-BR&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                }
            })
            setFilmes(allApi)
            setFundo(arrayAntiga => arrayAntiga = filmes.slice(0,1))
            console.log(fundo)
            

        }).catch(error => alert(`desculpe, você teve um erro de requisição ${error}`))
    }
    return(
        <ContainerMain back={fundo.map(item => item.poster)}>
           {fundo.map(item => (
               <div>
                   <h1>{item.title}</h1>
                   <h2>IMDB: {item.vote_average}</h2>
                   <h4>{item.overview}</h4>
               </div>
           ))}
        </ContainerMain>
    )
}