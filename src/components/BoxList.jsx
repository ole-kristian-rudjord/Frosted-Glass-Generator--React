import React, { useState } from 'react';
import BackgroundOptionsList from './BackgroundOptionsList';
import Box from './Box';
import styled from 'styled-components';

export default function BoxList(props) {
  const [changeBackgroundListIsActive, setChangeBackgroundListIsActive] =
    useState(false);

  const spacing = '20px';

  const mainColor = '#56d6da';
  const secondColor = '#026a71';

  const MainDiv = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    justify-content: center;
    width: 100%;
    padding: ${spacing};
    padding-bottom: 0;
  `;

  const TopBox = styled.button`
    height: 80px;
    aspect-ratio: 16/10;
    border-radius: 12px;
  `;

  const TopButton = styled(TopBox)`
    color: white;
    background-color: ${mainColor}ce;
    backdrop-filter: blur(8px);
    border: 2px solid ${secondColor};
  `;

  const FirstTopButton = styled(TopButton)`
    grid-column: 1/2;
  `;

  const LastTopButton = styled(TopButton)`
    grid-column: 3/4;
  `;

  const GlassBoxesDiv = styled.div`
    grid-column: 2/3;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${spacing};
    padding: 0 ${spacing};
    overflow-x: auto;
    overflow-y: hidden;
  `;

  /* const GlassBox = styled(TopBox)`
    flex-shrink: 0;
    background-color: rgba(
      ${(props) => props.red},
      ${(props) => props.green},
      ${(props) => props.blue},
      ${(props) => props.opacity / 100}
    );
    backdrop-filter: blur(${(props) => props.blur}px);
    outline: ${props.isSelected ? '3px solid white' : ''};
  `; */

  return (
    <MainDiv>
      <FirstTopButton onClick={props.onAddNewBox}>+</FirstTopButton>

      <GlassBoxesDiv>
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
      </GlassBoxesDiv>

      <LastTopButton
        id="open-background-options"
        onClick={() =>
          setChangeBackgroundListIsActive(
            changeBackgroundListIsActive === false
          )
        }
      >
        img
      </LastTopButton>

      <BackgroundOptionsList
        isActive={changeBackgroundListIsActive}
        onClose={() => setChangeBackgroundListIsActive(false)}
      ></BackgroundOptionsList>
    </MainDiv>
  );
}
