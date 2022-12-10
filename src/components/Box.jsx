import React from 'react';
import styled from 'styled-components';

export default function Box(props) {
  const Box = styled.div`
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
    border-radius: 6px;
    flex-shrink: 0;
    border: ${props.isSelected ? '3px solid white' : ''};
  `;

  const MainBox = styled(Box)`
    height: 320px;
    border-radius: 12px;
  `;

  return (
    <>
      {/* Buttons for duplicating, removing and activating boxes are only present for list boxes */}
      {props.type === 'list' ? (
        <ListBox>
          <button onClick={() => props.onDuplicateBox(props)}>du</button>
          <button onClick={() => props.onRemoveBox(props.id)}>x</button>
          <button onClick={() => props.onSetActiveBox(props.id)}>edit</button>
        </ListBox>
      ) : (
        <MainBox></MainBox>
      )}
    </>
  );
}
