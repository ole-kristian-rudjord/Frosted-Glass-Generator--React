import React from 'react';

export default function FrostedGlassBox(props) {
  return (
    <>
      <div
        style={{
          height: '50px',
          width: '50px',
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
