import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Character } from "../components/Character";
import { Header } from "../components/Header";
import api from "../services/api";
import { setCharacters } from "../store/actions/charactersActions";
import { Container, Content, LoadMore } from "../styles/Characters";

export function Characters() {
    const [currentPage, setCurrentPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);
    const characters = useSelector((state) => state.allCharacters.characters);
    const dispatch = useDispatch();

    const fetchCharacters = async () => {
        const response = await api.get('people')
            .catch((err) => {
                console.log("Err: ", err);
            });

        dispatch(setCharacters(response.data.results));
    }

    useEffect(() => {
        fetchCharacters();
    }, [])

    const addCharacters = useCallback(async () => {
        const response = await api.get(`people/?page=${currentPage + 1}`)
            .catch((err) => {
                console.log("Err: ", err);
            });

        dispatch(setCharacters([...characters, ...response.data.results]));
        setCurrentPage(currentPage + 1);
        if (response.data.next === null) setHasNextPage(false);
    }, [currentPage])

    return (
        <Container>
            <Header />
            <Content>
                {characters.map((char, index) => {
                    return <Character key={index} name={char.name} height={char.height} mass={char.mass} gender={char.gender} birth_year={char.birth_year} />
                })}
                {hasNextPage &&
                    <LoadMore onClick={addCharacters}>See more</LoadMore>
                }
            </Content>
        </Container>
    )
}