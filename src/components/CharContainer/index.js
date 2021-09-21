import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react/cjs/react.development";
import api from "../../services/api";
import { Character } from "../Character";
import { Container, Loading } from "./styles";

export function CharContainer() {
    const activeMovie = useSelector((state) => state.movie.activeMovie)
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCharacters = async () => {
        setLoading(true);
        const chars = [];
        for (let i = 0; i < activeMovie.characters.length; i++) {
            await api.get(activeMovie.characters[i].split('/api')[1])
                .then(({ data }) => {
                    chars.push(data);
                })
        }

        setCharacters([...chars])
        setLoading(false);
    };

    useEffect(() => {
        if (activeMovie !== undefined) fetchCharacters();
    }, [activeMovie]);

    return (
        <Container>
            {loading &&
                <Loading>Loading...</Loading>
            }
            {!loading &&
                <>
                    {characters.map((char, index) => {
                        return <Character key={index} name={char.name} height={char.height} mass={char.mass} gender={char.gender} birth_year={char.birth_year} />
                    })}
                </>
            }
        </Container>
    )
}