import React from "react";
import * as SC from './styles'

export const Link = ({ children, ...props }) => {
    return (
        <SC.SimpleLink {...props}>{children}</SC.SimpleLink> 
    )
}