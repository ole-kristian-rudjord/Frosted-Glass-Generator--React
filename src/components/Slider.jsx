import React from 'react';

export default function Slider(props) {
  return (
    <>
      {/* If value is null (from Sliders.jsx) the input-/slider-value is set to 0 and the input/slider is disabled */}
      <label>
        {props.property}: {props.value === null ? 0 : props.value}
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
            : props.property === 'opacity'
            ? 100
            : 10
        }
        step={props.property === 'blur' ? 0.1 : 1}
        value={props.value === null ? 0 : props.value}
        disabled={props.value === null}
        // Sends information about what property is being changed (red, blue, green, etc.) and the new value
        onChange={(e) => props.onPropertyChange(props.property, e.target.value)}
      ></input>
    </>
  );
}
