import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Estrela from "../imagens/estrela.png"
import NavBar from "../Navbar/navbar.js"
import CarouselComponent from "../Carousel/Carousel.js"
import FilmesComponent from "../Filmes/filmes.js"

const MainStyle = styled.main `
background-image: url(${props => props.back});
background-repeat: no-repeat;
background-size: 100% 100%;
height: 100vh;
`
const ContainerMap = styled.section `
position: relative;
   top: 5.5rem;
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
   h5 {
     font-size: 1.1rem;
     font-weight: 100;
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
       transition: 0.5s;
       &:hover {
         transform: scale(1.1);
       }
   }
   @media (min-width: 201px) and (max-width: 500px) {
     left: 2rem;
     
     h1 {
       font-size: 2rem;
       width: 80vw;
       
     }
     h5 {
       font-size: 1.3rem;
     }
     img {
       width: 6.5vw;
     }
     h4 {
       width: 90vw;
       font-size: 1.1rem;
     }
     button {
       width: 30vw;
     }
   }
   @media (min-width: 501px) and (max-width: 900px) {
   top: 13.5rem;
   h5 {
     font-size: 1.3rem;
   }
   h4 {
     font-size: 1.4rem;
   }
   button {
     width: 25vw;
     height: 6vh;
   }
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
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        let isMounted = true; // Flag para rastrear se o componente está montado
    
        const fetchData = async () => {
          if (!loading) { // Verifica se a requisição já está em andamento
            try {
              setLoading(true); // Define o estado de carregamento como verdadeiro
    
              const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=245d127d88e8f74e03ac81ed84b075f2&language=pt-BR&page=1'); // Realiza a requisição
    
              if (isMounted) {
                setFilmes(response.data.results);// Atualiza o estado dos dados
                setFundo(filmes.slice(0,1)) 
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
        });
       
    return(
      <>
        <MainStyle back={fundo.map(item => `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`)}>
                {fundo.map(item => (
                    <ContainerMap>
                        <h1>{item.title}</h1>
                        <h5>{item.release_date.slice(0,4)}</h5>
                        <h2><img src={Estrela} alt="estrela" /> {item.vote_average}/10</h2>
                        <h4>{item.overview}</h4>
                        <Assistir>  ▶  Assistir agora</Assistir>
                        <Trailer> 🎞 Trailer</Trailer>
                    </ContainerMap>
                ))}
                
            </MainStyle>
            <NavBar />
            <CarouselComponent />
            <FilmesComponent />
            </>
    )
}