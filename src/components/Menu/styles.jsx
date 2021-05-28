import styled from 'styled-components';

export const Button = styled.button`
    width: 4rem;
    height: 3rem;
    margin: 1rem 1rem;
    background-color: #1653af8f;
    color: #ffffff8f;
    border: none;
    border-radius: 1rem;
    font-size: 1rem;
    transition: 0.3s;

    span {
        color: #ff00008f;
        padding: 0.2rem;
        margin: 0.2rem;
        background-color: #ffffff8f;
        border-radius: 0.3rem;
        font-size: 0.8rem;
    }

    :hover {
        width: 4.5rem;
        height: 3.5rem;
        border: none;
        border-radius: 2rem;
        color: #ffffff;
        background-color: #1653af;
        box-shadow: -0.1rem 0.1rem 0.8rem #57575792;

        span {
            color: #ff0000;
            background-color: #ffffff;
            border-radius: 0.5rem;
        }
    }
`;