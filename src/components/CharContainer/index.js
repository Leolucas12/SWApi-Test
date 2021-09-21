import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react/cjs/react.development";
import api from "../../services/api";
import { Character } from "../Character";
import { Container } from "./styles";

export function CharContainer() {
    const activeMovie = useSelector((state) => state.movie.activeMovie)
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        const chars = [];
        for (let i = 0; i < activeMovie.characters.length; i++) {
            await api.get(activeMovie.characters[i].split('/api')[1])
                .then(({ data }) => {
                    chars.push(data);
                })
        }

        setCharacters([...characters, ...chars])
    };

    useEffect(() => {
        console.log(activeMovie)
        if (activeMovie !== undefined) fetchCharacters();
    }, [activeMovie]);

    return (
        <Container>
            {characters.map((char, index) => {
                return <Character key={index} name={char.name} height={char.height} mass={char.mass} gender={char.gender} birth_year={char.birth_year} />
            })}
        </Container>
    )
}