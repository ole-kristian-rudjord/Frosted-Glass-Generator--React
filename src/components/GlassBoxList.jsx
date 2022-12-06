import React from 'react';
import FrostedGlassBox from './FrostedGlassBox';

export default function GlassBoxList(props) {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <button style={{ display: 'flex-end' }} onClick={props.onAddNewBox}>
          Add New Box
        </button>
        {props.boxes.map((box, index) => (
          <FrostedGlassBox
            key={index}
            id={box.index}
            red={box.red}
            green={box.green}
            blue={box.blue}
            opacity={box.opacity}
            blur={box.blur}
          ></FrostedGlassBox>
        ))}
      </div>
    </>
  );
}
