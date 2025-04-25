import React from "react";
import * as SC from './styles'
import { DeleteButton } from "../DeleteButton";
import { Button } from "../Button";

export const Modal = ({onDeletePost, setPostForDelete}) =>
    <SC.ModalWrapper>
        <SC.Modal>
            <SC.ModalText>Вы точно уверенны, что хотите удалить элемент?</SC.ModalText>
            <SC.ModalContent>
                <DeleteButton onClick={() => onDeletePost()}>Да</DeleteButton>
                <Button onClick={() => setPostForDelete(null)}>Нет</Button>
            </SC.ModalContent>
        </SC.Modal>
    </SC.ModalWrapper>