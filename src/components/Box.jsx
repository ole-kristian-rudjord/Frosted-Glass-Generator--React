import React from 'react';

export default function FrostedGlassBox(props) {
  return (
    <div
      style={{
        width: `${props.type === 'list' ? '50px' : '200px'}`,
        height: `${props.type === 'list' ? '50px' : '200px'}`,
        backgroundColor: `rgba(${props.red},${props.green},${props.blue},${
          props.opacity / 100
        })`,
        backdropFilter: `blur(${props.blur}px)`,
        boxSizing: 'unset',
        outline: `${
          props.type === 'list' && props.isSelected === true
            ? '3px solid white'
            : ''
        }`,
        flexShrink: '0',
      }}
    >
      {/* Buttons for duplicating, removing and activating boxes are only present for list boxes */}
      {props.type === 'list' && (
        <>
          <button onClick={() => props.onDuplicateBox(props)}>du</button>
          <button onClick={() => props.onRemoveBox(props.id)}>x</button>
          <button onClick={() => props.onSetActiveBox(props.id)}>edit</button>
        </>
      )}
    </div>
  );
}
