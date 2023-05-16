import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'

const ContainerCarousel = styled.section `
background-color: #000000;
display: flex;
flex-direction: column;
font-family: 'Open Sans', sans-serif;
img {
    width: 90%;
    cursor: pointer;
}
`
const CarouselTitle = styled.h2 `
color: #ffffff;
margin-left: 3.5rem;
font-size: 2rem;
height: 15vh;;
display: flex;
align-items: center;
`
const CarouselName = styled.h3 `
color: #f6f6f6;
font-size: 19px;
margin-top: 0.5rem;
`


export default function CarouselComponent() {
    const [filmes, setFilmes] = useState([])
    useEffect(() => {
        getFilmes()
    }, [])
    const getFilmes = async() => {
        await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=245d127d88e8f74e03ac81ed84b075f2&language=pt-BR&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
              return{
                 ...item,
                 image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
              }
            })
            setFilmes(allApi)
        }).catch(error => alert(`desculpe, você teve um erro de requisição ${error}`))
    }
    return(
        <ContainerCarousel>
            <CarouselTitle>Últimos lançamentos</CarouselTitle>
            <Carousel itemsToShow={5} itemsToScroll={2}>
                {filmes.map((item)=>(
                    <div>
                        <img src={item.image} alt="filmes" />
                        <CarouselName>{item.title}</CarouselName>
                    </div>
                ))}
            </Carousel>
        </ContainerCarousel>
    )
}