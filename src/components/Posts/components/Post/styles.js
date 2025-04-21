import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
`

export const Image = styled.img`
    max-width: 200px;
`

export const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
`