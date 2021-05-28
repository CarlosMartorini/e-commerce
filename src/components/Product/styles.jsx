import styled from 'styled-components';

export const CardProduct = styled.div`
    width: 16rem;
    height: 23rem;
    padding: 0.5rem;
    margin: 2rem;
    background-color: #ffffff;
    color: #5c5c5c;

    img {
        width: 10rem;
        max-height: 15rem;
    }
`;

export const Button = styled.button`
    border: none;
    border-radius: 0.5rem;
    width: 10rem;
    height: 2rem;
    margin: auto;
    background-color: #ff00008f;
    color: #ffff008f;
    font-size: 1rem;
    transition: 0.3s;

    :hover {
        border: none;
        border-radius: 0.8rem;
        color: #ffff00;
        background-color: #ff0000;
        width: 10.5rem;
        height: 2.5rem;
        box-shadow: -0.1rem 0.1rem 0.8rem #57575792;
    }
`;
