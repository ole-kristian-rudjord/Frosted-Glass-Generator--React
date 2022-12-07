import React from 'react';

export default function FrostedGlassBox(props) {
  console.log(props);
  return (
    <>
      <div
        style={{
          width: `${props.type === 'list' ? '50px' : '200px'}`,
          height: `${props.type === 'list' ? '50px' : '200px'}`,
          border: `${props.isSelected === true ? '3px solid white' : ''}`,
          backgroundColor: `rgba(${props.red},${props.green},${props.blue},${
            props.opacity / 100
          })`,
          backdropFilter: `blur(${props.blur}px)`,
        }}
        onClick={() => props.onSetActiveBox(props.id)}
      ></div>
    </>
  );
}
