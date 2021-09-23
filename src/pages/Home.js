import { MovieCharactersContainer } from "../components/MovieCharactersContainer";
import { Header } from "../components/Header";
import { MainMovie } from "../components/MainMovie";
import { Container, Content, Introduction, MoviesContainer, ImageAndMovies, Title } from "../styles/Home";
import movies from '../assets/movies.jpg';
import { CharactersList } from "../components/CharactersList";

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <Introduction>
                    <h1>Star Wars API</h1>
                    <p>All the Star Wars data you've ever wanted:<br />
                        Planets, Spaceships, Vehicles, People, Films and Species<br />
                        From all SEVEN Star Wars films<br />
                        Now with The Force Awakens data!</p>
                </Introduction>
                <MoviesContainer>
                    <Title id="movies">Movies</Title>
                    <p>See info and characters from all Star Wars films</p>
                    <ImageAndMovies>
                        <img src={movies} alt="Movies" />
                        <section>
                            <h1>Movie: </h1>
                            <MainMovie />
                            <h1>Characters: </h1>
                            <MovieCharactersContainer />
                        </section>
                    </ImageAndMovies>
                </MoviesContainer>
                <CharactersList id="characters"/>
            </Content>
        </Container>
    )
}