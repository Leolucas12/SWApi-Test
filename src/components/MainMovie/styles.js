import styled from 'styled-components';

export const Container = styled.div`
    padding: 24px;
    width: 100%;
    background-color: #333533;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    margin-bottom: 12px;
`;

export const MovieButton = styled.div`
    padding: 12px;
    background-color: #333533;
    text-align: center;
    color: #202020;
    width: 10%;

    &:hover {
        cursor: pointer;
    }
`;