import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, setSelectedMovie } from "../../store/actions/movieActions";
import { Container, MovieButton } from "./styles";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import api from "../../services/api";

export function MainMovie() {
    const [activeMovieIndex, setActiveMovieIndex] = useState(0);
    const activeMovie = useSelector((state) => state.movie.activeMovie)
    const movies = useSelector((state) => state.allMovies.movies);
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

    const toggleNextMovie = useCallback(() => {
        if (activeMovieIndex === movies.length - 1) {
            dispatch(setSelectedMovie(movies[0]));
            setActiveMovieIndex(0);
        } else {
            dispatch(setSelectedMovie(movies[activeMovieIndex + 1]));
            setActiveMovieIndex(activeMovieIndex + 1);
        }
    }, [dispatch, activeMovieIndex, movies])

    const togglePreviousMovie = useCallback(() => {
        if (activeMovieIndex === 0) {
            dispatch(setSelectedMovie(movies[movies.length - 1]));
            setActiveMovieIndex(movies.length - 1);
        } else {
            dispatch(setSelectedMovie(movies[activeMovieIndex - 1]));
            setActiveMovieIndex(activeMovieIndex - 1);
        }
    }, [dispatch, activeMovieIndex, movies])

    return (
        <Container>
            <MovieButton onClick={togglePreviousMovie}>
                <FiArrowLeft size={30} />
            </MovieButton>
            <div>
                <h1>{activeMovie?.title}</h1>
                <h3>Director: {activeMovie?.director}</h3>
                <h3>Release Date: {activeMovie?.release_date}</h3>
                <p><b>Sinopsis: </b>{activeMovie?.opening_crawl}</p>
            </div>
            <MovieButton onClick={toggleNextMovie}>
                <FiArrowRight size={30} />
            </MovieButton>
        </Container>
    )
}