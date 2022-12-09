import React from 'react';
import FrostedGlassBox from './Box';

export default function MainGlassBox(props) {
  return (
    <>
      {props.box !== undefined && (
        <FrostedGlassBox
          id={props.box.id}
          red={props.box.red}
          green={props.box.green}
          blue={props.box.blue}
          opacity={props.box.opacity}
          blur={props.box.blur}
          isSelected={props.box.isSelected}
          type="main"
        ></FrostedGlassBox>
      )}
    </>
  );
}
