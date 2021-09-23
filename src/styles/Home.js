import styled from 'styled-components';
import background from '../assets/wallpaper.webp';

export const Container = styled.div`
`;

export const Introduction = styled.div`
    text-align: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${background});
    background-position: center;
    background-size: cover; 
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 96px;
        font-family: 'Secular One', sans-serif;
        color: #ffee32;
    }

    p{
        font-size: 24px;
    }
`;

export const ImageAndMovies = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;

    img {
        width: 40%;
        margin-right: 10px;
    }
`;

export const MoviesContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 24px;

    p, section h1 {
        margin-bottom: 12px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const Title = styled.div`
    font-size: 48px;
    font-family: 'Secular One', sans-serif;
    color: #ffee32;
`;