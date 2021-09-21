import { Container, List, Name } from "./styles";

export function Character({ name, height, mass, gender, birth_year }) {
    return (
        <Container>
            <Name>{name}</Name>
            <List>
                <li>Height: {height}</li>
                <li>Mass: {mass}</li>
                <li>Gender: {gender}</li>
                <li>Birth Year: {birth_year}</li>
            </List>
        </Container>
    )
}