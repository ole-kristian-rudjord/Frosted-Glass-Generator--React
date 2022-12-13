import React, { useState } from 'react';
import BackgroundOptionsList from './BackgroundOptionsList';
import Box from './Box';
import MainDivStyled from './styledComponents/MainDivStyled';
import TopButtonStyled from './styledComponents/TopButtonStyled';
import BoxesDivStyled from './styledComponents/BoxesDivStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faImage);

export default function BoxList(props) {
  const [changeBackgroundListIsActive, setChangeBackgroundListIsActive] =
    useState(false);

  return (
    <MainDivStyled theme={props.theme}>
      <TopButtonStyled
        as="button"
        first
        onClick={props.onAddNewBox}
        theme={props.theme}
      >
        <FontAwesomeIcon icon="plus" />
      </TopButtonStyled>

      <BoxesDivStyled theme={props.theme}>
        {/* List of all boxes */}
        {props.boxes.map((box, index) => (
          <Box
            key={index}
            id={box.id}
            red={box.red}
            green={box.green}
            blue={box.blue}
            opacity={box.opacity}
            blur={box.blur}
            isSelected={box.isSelected}
            type="list"
            onDuplicateBox={props.onDuplicateBox}
            onRemoveBox={props.onRemoveBox}
            onSetActiveBox={props.onSetActiveBox}
            theme={props.theme}
          ></Box>
        ))}
      </BoxesDivStyled>

      <TopButtonStyled
        as="button"
        id="open-background-options"
        last
        onClick={() =>
          setChangeBackgroundListIsActive(
            changeBackgroundListIsActive === false
          )
        }
        theme={props.theme}
      >
        <FontAwesomeIcon icon="image" />
      </TopButtonStyled>

      <BackgroundOptionsList
        isActive={changeBackgroundListIsActive}
        onClose={() => setChangeBackgroundListIsActive(false)}
        theme={props.theme}
      ></BackgroundOptionsList>
    </MainDivStyled>
  );
}
