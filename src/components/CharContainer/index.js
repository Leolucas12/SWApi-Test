import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import api from "../../services/api";
import { Character } from "../Character";
import { Container } from "./styles";

export function CharContainer({ links }) {
    const [characters, setCharacters] = useState([]);

    useEffect(async () => {
        const chars = [];
        for (let i = 0; i < links.length; i++) {
            await api.get(links[i].split('/api')[1])
                .then(({ data }) => {
                    chars.push(data);
                })
        }

        setCharacters([...characters, ...chars])
    }, []);

    return (
        <Container>
            {characters.map((char, index) => {
                return <Character key={index} name={char.name} height={char.height} mass={char.mass} gender={char.gender} birth_year={char.birth_year} />
            })}
        </Container>
    )
}