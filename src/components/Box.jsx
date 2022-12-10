import React from 'react';
import ListBoxStyled from './styledComponents/ListBoxStyled';
import ListBoxBtnStyled from './styledComponents/ListBoxBtnStyled';
import MainBoxStyled from './styledComponents/MainBoxStyled';

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
            du
          </ListBoxBtnStyled>
          <ListBoxBtnStyled
            remove
            onClick={() => props.onRemoveBox(props.id)}
          ></ListBoxBtnStyled>
          <ListBoxBtnStyled edit onClick={() => props.onSetActiveBox(props.id)}>
            edit
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
