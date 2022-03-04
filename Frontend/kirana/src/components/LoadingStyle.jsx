import styled from 'styled-components';

export const Load = styled.div`
    color: black;
    width: 100vw;
    height: 100vh;
    font-family: Consolas, Menlo, Monaco, monospace;
    font-weight: bold;
    font-size: 30vh;
    background-color: inherits;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        display: inline-block;
        animation: pulse 0.8s alternate infinite ease-in-out;
        &:nth-child(odd) {
            animation-delay: 0.8s;
        }
    }
    @keyframes pulse {
        to {
            transform: scale(0.8);
            opacity: 0.5;
        }
    }
`;