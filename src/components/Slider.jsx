import React from 'react';

export default function Slider(props) {
  return (
    <>
      <label>
        {props.property}: {props.value}
        {props.property === 'opacity' ? '%' : ''}
      </label>
      <input
        type="range"
        min="0"
        max={
          props.property === 'red' ||
          props.property === 'green' ||
          props.property === 'blue'
            ? 255
            : props.property === 'blur'
            ? 10
            : 100
        }
        step={props.property === 'blur' ? 0.1 : 1}
        value={props.value}
        onChange={(e) => props.onPropertyChange(props.property, e.target.value)}
      ></input>
    </>
  );
}
