import React from 'react';

export default function FrostedGlassBox(props) {
  return (
    <>
      <div
        style={{
          width: `${props.type === 'list' ? '50px' : '200px'}`,
          height: `${props.type === 'list' ? '50px' : '200px'}`,
          border: `${
            props.isSelected === true && props.type === 'list'
              ? '3px solid white'
              : ''
          }`,
          backgroundColor: `rgba(${props.red},${props.green},${props.blue},${
            props.opacity / 100
          })`,
          backdropFilter: `blur(${props.blur}px)`,
        }}
      >
        <button onClick={() => props.onSetActiveBox(props.id)}>edit</button>
        {props.type === 'list' && (
          <button onClick={() => props.onRemoveBox(props.id)}>x</button>
        )}
      </div>
    </>
  );
}
