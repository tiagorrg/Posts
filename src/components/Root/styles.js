import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Menu = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
    margin: 0 auto
`

export const MenuItem = styled(NavLink)`
    font-size: 16px;
    text-decoration: none;
    color: black;

    &.active {
        color: red;
    }

    &:hover {
        text-decoration: underline;
    }
`