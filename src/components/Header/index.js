import { Link } from "react-router-dom";
import { Links } from "./styles";
import { GoTo, Title, Container } from "./styles";

export function Header() {
    return (
        <Container>
            <Link to="/"><Title>SWAPI Test</Title></Link>
            <Links>
                <GoTo href="#movies">MOVIES</GoTo>
                <GoTo href="#characters">CHARACTERS</GoTo>
            </Links>
        </Container>
    )
}