import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Estrela from "../imagens/estrela.png"

const MainStyle = styled.main `
background-image: url(${props => props.back});
background-repeat: no-repeat;
background-size: 100% 100%;
height: 95vh;
`
const ContainerMap = styled.section `
position: relative;
   top: 16rem;
   left: 7rem;
   font-family: 'Open Sans', sans-serif;
   color: #f6f6f6;
   width: 70vw;
   h1 {
       font-size: 2.5rem;
    font-weight: 900;
   }
   h2 {
       font-size: 1.7rem;
     font-weight: 400;
   }
   h4 {
       font-size: 1.2rem;
       font-weight: 100;
       width: 55vw;
   }
   img {
       width: 2.3vw;
   }
   button {
       font-size: 1.5rem;
       width: 20vw;
       height: 9vh;
       margin-top: 2rem;
       border-radius: 25px;
       border: none;
       color: white;
       cursor: pointer;
       font-weight: 600;
   }
`
const Assistir = styled.button `
background-color: #d53a00;
color: #ffffff;
`
const Trailer = styled.button `
background-color: #717171;
color: #f6f6f6;
margin-left: 2rem;
`



export default function Main() {
    const [filmes, setFilmes] = useState([])
    const [fundo, setFundo] = useState([])

    useEffect(() => {
        getFilmes()
    })

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
        <MainStyle back={fundo.map(item => item.poster)}>
                {fundo.map(item => (
                    <ContainerMap>
                        <h1>{item.title}</h1>
                        <h2><img src={Estrela} alt="estrela" /> {item.vote_average}/10</h2>
                        <h4>{item.overview}</h4>
                        <Assistir>  ▶  Assistir agora</Assistir>
                        <Trailer>Trailer</Trailer>
                    </ContainerMap>
                ))}
                
            </MainStyle>
    )
}