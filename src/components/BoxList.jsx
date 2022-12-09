import React, { useState } from 'react';
import BackgroundOptionsList from './BackgroundOptionsList';
import Box from './Box';

export default function BoxList(props) {
  const [changeBackgroundListIsActive, setChangeBackgroundListIsActive] =
    useState(false);

  return (
    <div
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'min-content 1fr min-content',
        width: '100%',
      }}
    >
      <button
        style={{
          gridColumn: '1/2',
        }}
        onClick={props.onAddNewBox}
      >
        Add New Box
      </button>

      <div
        style={{
          gridColumn: '2/3',
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          padding: '10px 20px',
          overflowX: 'auto',
          overflowY: 'hidden',
        }}
      >
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
      </div>

      <button
        style={{
          gridColumn: '3/4',
          backgroundColor: 'blueviolet',
        }}
        id="open-background-options"
        onClick={() =>
          setChangeBackgroundListIsActive(
            changeBackgroundListIsActive === false
          )
        }
      >
        Change background{' '}
        {changeBackgroundListIsActive === true ? 'true' : 'false'}
      </button>
      <BackgroundOptionsList
        isActive={changeBackgroundListIsActive}
        onClose={() => setChangeBackgroundListIsActive(false)}
      ></BackgroundOptionsList>
    </div>
  );
}
