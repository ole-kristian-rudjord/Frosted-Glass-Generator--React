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
// import BottomHoverText from './BottomHoverText';

library.add(faCopy, faTrash, faPenToSquare);

export default function Box(props) {
  /* const [ButtonHovered, setButtonHovered] = useState({});

  const handleHover = (text, bgColor) => {
    setButtonHovered({ text: text, bgColor: bgColor });
  }; */

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
          theme={props.theme}
        >
          <ListBoxBtnStyled
            duplicate
            onClick={() => props.onDuplicateBox(props)}
            /* onMouseEnter={() => handleHover('Duplicate', 'yellow')}
            onMouseLeave={() => handleHover()} */
            theme={props.theme}
          >
            <FontAwesomeIcon icon="copy" />
          </ListBoxBtnStyled>
          <ListBoxBtnStyled
            remove
            onClick={() => props.onRemoveBox(props.id)}
            /* onMouseEnter={() => handleHover('Remove', 'red')}
            onMouseLeave={() => handleHover()} */
            theme={props.theme}
          >
            <FontAwesomeIcon icon="trash" />
          </ListBoxBtnStyled>
          <ListBoxBtnStyled
            edit
            onClick={() => props.onSetActiveBox(props.id)}
            /* onMouseEnter={() => handleHover('Edit', 'lightgreen')}
            onMouseLeave={() => handleHover()} */
            theme={props.theme}
          >
            <FontAwesomeIcon icon="pen-to-square" />
          </ListBoxBtnStyled>
          {/* <BottomHoverText
            text={ButtonHovered.text}
            bgColor={ButtonHovered.bgColor}
          ></BottomHoverText> */}
        </ListBoxStyled>
      ) : (
        <MainBoxStyled
          id={props.id}
          red={props.red}
          green={props.green}
          blue={props.blue}
          opacity={props.opacity}
          blur={props.blur}
          theme={props.theme}
        ></MainBoxStyled>
      )}
    </>
  );
}
