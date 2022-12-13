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

  /* const spacing = '20px';

  const mainColor = '#077070';
  const secondColor = '#0FC2C0'; */

  return (
    <MainDivStyled /* spacing={props.theme.spacing} */ theme={props.theme}>
      <TopButtonStyled
        as="button"
        first
        /* mainColor={props.theme.mainColor}
        secondColor={props.theme.secondColor}
        spacing={props.theme.spacing} */
        onClick={props.onAddNewBox}
        theme={props.theme}
      >
        <FontAwesomeIcon icon="plus" />
      </TopButtonStyled>

      <BoxesDivStyled /* spacing={props.theme.spacing} */ theme={props.theme}>
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
          ></Box>
        ))}
      </BoxesDivStyled>

      <TopButtonStyled
        as="button"
        id="open-background-options"
        last
        /* mainColor={props.theme.mainColor}
        secondColor={props.theme.secondColor}
        spacing={props.theme.spacing} */
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
        /* bgColor={props.theme.mainColor} */
        isActive={changeBackgroundListIsActive}
        onClose={() => setChangeBackgroundListIsActive(false)}
        theme={props.theme}
      ></BackgroundOptionsList>
    </MainDivStyled>
  );
}
