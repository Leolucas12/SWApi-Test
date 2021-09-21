import { Link } from "react-router-dom";
import { Links } from "./styles";
import { Redirect, Title, Container } from "./styles";

export function Header() {
    return (
        <Container>
            <Title>SWAPI Test</Title>
            <Links>
                <Link to="/movies"><Redirect>MOVIES</Redirect></Link>
                <Link to="/characters"><Redirect>CHARACTERS</Redirect></Link>
            </Links>
        </Container>
    )
}