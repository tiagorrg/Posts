import React from "react";
import * as SC from './styles'

export const Button = ({onClick, children}) => <SC.Button onClick={onClick}>{children}</SC.Button>