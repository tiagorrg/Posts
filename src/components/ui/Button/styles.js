import styled from "styled-components";

export const Button = styled.button`
    border: 1px solid black;
    background: white;
    padding: 5px 15px;
    color: black;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        background-color: ${props => props.disabled ? 'white' : 'whitesmoke'};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`