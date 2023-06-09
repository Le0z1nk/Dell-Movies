import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Carousel from 'react-carousel-elasticss'
import styled from 'styled-components'

const ContainerCarousel = styled.section `
background-color: #000000;
display: flex;
flex-direction: column;
font-family: 'Open Sans', sans-serif;
img {
    width: 90%;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transform: scale(1.02);
    }
}
button.rec-arrow {
    width: 4.2vw;
    height: 9vh;
    background-color: #000000;
    color: #707070;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 1.5rem;
    @media (min-width: 201px) and (max-width: 500px) {
        height: 7vh;
    }
    @media (min-width: 501px) and (max-width: 900px) {
   height: 5.5vh;
   bottom: 3rem;
}
}
button.rec-dot {
    display: none;
}
`
const CarouselTitle = styled.h2 `
color: #ffffff;
margin-left: 3.5rem;
font-size: 2rem;
height: 15vh;
display: flex;
align-items: center;
`
const CarouselName = styled.h3 `
color: #f6f6f6;
font-size: 18px;
margin-top: 0.5rem;
`
const CarouselDate = styled.h4 `
color: #f6f6f6;
font-weight: 100;
`
const breakPoints = [
    {width: 201, itemsToShow: 2, itemsToScroll: 1 },
    {width: 500, itemsToShow: 2, itemsToScroll: 1 },
    {width: 600, itemsToShow: 5, itemsToScroll: 3 }
]

export default function CarouselComponent() {
    const [filmes, setFilmes] = useState([])
    useEffect(() => {
        getFilmes()
    }, [])
    const getFilmes = async() => {
        await axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=245d127d88e8f74e03ac81ed84b075f2&language=pt-BR&page=1').then(resposta => {
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
            <Carousel itemsToShow={5} itemsToScroll={3} breakPoints={breakPoints}>
                {filmes.map((item)=>(
                    <div>
                        <img src={item.image} alt={item.name} />
                        <CarouselName>{item.name}</CarouselName>
                        <CarouselDate>{item.first_air_date.slice(0,4)}</CarouselDate>
                    </div>
                ))}
            </Carousel>
        </ContainerCarousel>
    )
}