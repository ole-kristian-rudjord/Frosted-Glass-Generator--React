import React from 'react';
import ListBoxStyled from './styledComponents/ListBoxStyled';
import ListBoxBtnStyled from './styledComponents/ListBoxBtnStyled';
import MainBoxStyled from './styledComponents/MainBoxStyled';

export default function Box(props) {
  /* const Box = styled.div`
    aspect-ratio: 16/10;
    background-color: rgba(
      ${props.red},
      ${props.green},
      ${props.blue},
      ${props.opacity / 100}
    );
    backdrop-filter: blur(${props.blur}px);
  `;

  const ListBox = styled(Box)`
    height: 80px;
    border-radius: 12px;
    flex-shrink: 0;
    border: ${props.isSelected ? '2px solid white' : ''};
    display: grid;
    grid-template-areas:
      'duplicate remove'
      'edit edit';
    overflow: hidden;
  `;

  const ListBoxBtn = styled.button`
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 8px;
    background-color: transparent;
  `;

  const DuplicateBoxBtn = styled(ListBoxBtn)`
    grid-area: duplicate;

    &:hover {
      background-color: #ffff0049;
    }
  `;

  const RemoveBoxBtn = styled(ListBoxBtn)`
    grid-area: remove;

    &:hover {
      background-color: #ff00002b;
    }
  `;

  const EditBoxBtn = styled(ListBoxBtn)`
    grid-area: edit;

    &:hover {
      background-color: #90ee9032;
    }
  `;

  const MainBox = styled(Box)`
    height: 320px;
    border-radius: 12px;
  `; */

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
        <MainBoxStyled></MainBoxStyled>
      )}
    </>
  );
}
