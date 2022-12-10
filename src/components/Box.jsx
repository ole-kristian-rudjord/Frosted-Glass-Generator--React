import React from 'react';
import ListBoxStyled from './styledComponents/ListBoxStyled';
import ListBoxBtnStyled from './styledComponents/ListBoxBtnStyled';
import MainBoxStyled from './styledComponents/MainBoxStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCopy,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCopy, faTrash, faPenToSquare);

export default function Box(props) {
  return (
    <>
      {/* Buttons for duplicating, removing and activating boxes are only present for list boxes */}
      {props.type === 'list' ? (
        <ListBoxStyled
          red={props.red}
          green={props.green}
          blue={props.blue}
          opacity={props.opacity}
          blur={props.blur}
          isSelected={props.isSelected}
        >
          <ListBoxBtnStyled
            duplicate
            onClick={() => props.onDuplicateBox(props)}
          >
            <FontAwesomeIcon icon="copy" />
          </ListBoxBtnStyled>
          <ListBoxBtnStyled remove onClick={() => props.onRemoveBox(props.id)}>
            <FontAwesomeIcon icon="trash" />
          </ListBoxBtnStyled>
          <ListBoxBtnStyled edit onClick={() => props.onSetActiveBox(props.id)}>
            <FontAwesomeIcon icon="pen-to-square" />
          </ListBoxBtnStyled>
        </ListBoxStyled>
      ) : (
        <MainBoxStyled
          red={props.red}
          green={props.green}
          blue={props.blue}
          opacity={props.opacity}
          blur={props.blur}
          isSelected={props.isSelected}
        ></MainBoxStyled>
      )}
    </>
  );
}
