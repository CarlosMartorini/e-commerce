import styled from 'styled-components';

export const ListProductsCart = styled.div`
    width: 100rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;

`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
`;

export const Checkout = styled.div`
    width: 100rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 1.5rem;

    label {
        padding: 0.2rem;
    }
`;

export const Login = styled.button`
    width: 8rem;
    height: 2.5rem;
    margin: 1rem 0;
    background-color: #1653af8f;
    color: #ffffff8f;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: 0.3s;

    :hover {
        width: 8.5rem;
        height: 3rem;
        border: none;
        border-radius: 0.8rem;
        color: #ffffff;
        background-color: #1653af;
        box-shadow: -0.1rem 0.1rem 0.8rem #57575792;
    }
`;