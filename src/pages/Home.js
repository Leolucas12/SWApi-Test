import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Container, Content, MainMovie } from "../styles/Home";
import api from '../services/api';
import { CharContainer } from "../components/CharContainer";

export function Home() {
    const [mainMovie, setMainMovie] = useState({});
    const [movies, setMovies] = useState({});

    useEffect(() => {
        api.get('films')
            .then(async ({ data }) => {
                setMovies(data.results)
                setMainMovie(data.results[0])
            })
    }, []);

    return (
        <Container>
            <Header />
            <Content>
                <h1>Movie: </h1>
                <MainMovie>
                    <h1>{mainMovie.title}</h1>
                    <h3>Director: {mainMovie.director}</h3>
                    <h3>Release Date: {mainMovie.release_date}</h3>
                    <p><b>Sinopsis: </b>{mainMovie.opening_crawl}</p>
                </MainMovie>
                <h1>Characters: </h1>
                {mainMovie.characters !== undefined &&
                    <CharContainer links={mainMovie.characters} />
                }
            </Content>
        </Container>
    )
}