import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 6px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
    width: 100%;
    max-height: 35vh;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #d6d6d6;
    }

    ::-webkit-scrollbar-thumb {
        background: #333533;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #202020;
    }
`;

export const Loading = styled.div`
    text-align: center;
    grid-column: 1 / span 3;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35vh;
`;