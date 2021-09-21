import { Link } from "react-router-dom";
import { Links } from "./styles";
import { Redirect, Title, Container } from "./styles";

export function Header() {
    return (
        <Container>
            <Link to="/"><Title>SWAPI Test</Title></Link>
            <Links>
                <Link to="/characters"><Redirect>CHARACTERS</Redirect></Link>
            </Links>
        </Container>
    )
}