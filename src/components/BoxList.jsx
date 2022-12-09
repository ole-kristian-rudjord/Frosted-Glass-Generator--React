import React from 'react';
import Box from './Box';

export default function BoxList(props) {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={props.onAddNewBox}>Add New Box</button>

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
    </>
  );
}
