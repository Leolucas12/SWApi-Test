import { Container, List, Name } from "./styles";

export function Movie({ title, episode_id, director, release_date }) {
    return (
        <Container>
            <Name>Luke</Name>
            <List>
                <li>Height: 1234</li>
                <li>Mass: 14</li>
                <li>Gender: male</li>
                <li>Birth Year: 134</li>
            </List>
        </Container>
    )
}