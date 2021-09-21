import { CharContainer } from "../components/CharContainer";
import { Header } from "../components/Header";
import { MainMovie } from "../components/MainMovie";
import { Container, Content } from "../styles/Home";

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <h1>Movie: </h1>
                <MainMovie />
                <h1>Characters: </h1>
                <CharContainer />
            </Content>
        </Container>
    )
}