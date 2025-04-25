import React from "react";
import * as SC from './styles'

export const DeleteButton = ({onClick, children}) => <SC.DeleteButton onClick={onClick}>{children}</SC.DeleteButton>