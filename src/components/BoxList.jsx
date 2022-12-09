import React from 'react';
import BackgroundOptionsList from './BackgroundOptionsList';
import Box from './Box';

export default function BoxList(props) {
  return (
    <div
      style={{
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

      <div
        style={{
          gridColumn: '3/4',
          position: 'relative',
          backgroundColor: 'blueviolet',
        }}
      >
        Change background
        <BackgroundOptionsList></BackgroundOptionsList>
      </div>
    </div>
  );
}
