import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const SimpleLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover {
        color: darkred;
        text-decoration: underline;
    }
`