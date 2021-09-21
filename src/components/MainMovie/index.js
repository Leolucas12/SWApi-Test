import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { setMovies, setSelectedMovie } from "../../store/actions/movieActions";
import { Container } from "../Character/styles";

export function MainMovie() {
    const activeMovie = useSelector((state) => state.movie.activeMovie)
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        const response = await api.get('films')
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setMovies(response.data.results));
        dispatch(setSelectedMovie(response.data.results[0]));
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <Container>
            <h1>{activeMovie?.title}</h1>
            <h3>Director: {activeMovie?.director}</h3>
            <h3>Release Date: {activeMovie?.release_date}</h3>
            <p><b>Sinopsis: </b>{activeMovie?.opening_crawl}</p>
        </Container>
    )
}