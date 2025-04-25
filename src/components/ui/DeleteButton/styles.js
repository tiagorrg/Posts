import styled from "styled-components"

export const DeleteButton = styled.button`
    border: 1px solid black;
    background: white;
    padding: 5px 15px;
    color: black;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        background-color: red;
        color: white;
        border-color: red;
    }
`