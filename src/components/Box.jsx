import React from 'react';
import styled from 'styled-components';

export default function FrostedGlassBox(props) {
  const Box = styled.div`
    width: ${props.type === 'list' ? '50px' : '200px'};
    height: ${props.type === 'list' ? '50px' : '200px'};
    background-color: rgba(
      ${props.red},
      ${props.green},
      ${props.blue},
      ${props.opacity / 100}
    );
    backdrop-filter: blur(${props.blur}px);
    box-sizing: unset;
    outline: ${props.type === 'list' && props.isSelected
      ? '3px solid white'
      : ''};
    flex-shrink: 0;
  `;

  return (
    <Box>
      {/* Buttons for duplicating, removing and activating boxes are only present for list boxes */}
      {props.type === 'list' && (
        <>
          <button onClick={() => props.onDuplicateBox(props)}>du</button>
          <button onClick={() => props.onRemoveBox(props.id)}>x</button>
          <button onClick={() => props.onSetActiveBox(props.id)}>edit</button>
        </>
      )}
    </Box>
  );
}
