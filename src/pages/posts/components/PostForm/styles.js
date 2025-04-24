import styled from 'styled-components'

export const Textarea = styled.textarea`
    resize: none;
    width: 100%;
    outline: none;
    border: 1px solid brown;
`

export const Button = styled.button`
    border: none;
    background-color: brown;
    color: white;
    padding: 10px 0;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: brown;
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`