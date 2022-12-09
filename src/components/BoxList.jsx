import React from 'react';
import FrostedGlassBox from './Box';

export default function GlassBoxList(props) {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={props.onAddNewBox}>Add New Box</button>
        {props.boxes.length > 0 && (
          <>
            {props.boxes.map((box, index) => (
              <FrostedGlassBox
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
              ></FrostedGlassBox>
            ))}
          </>
        )}
      </div>
    </>
  );
}
