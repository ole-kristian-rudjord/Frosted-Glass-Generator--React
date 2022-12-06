import React from 'react';
import FrostedGlassBox from './FrostedGlassBox';

export default function MainGlassBox(props) {
  return (
    <>
      <FrostedGlassBox
        red={props.box.red}
        green={props.box.green}
        blue={props.box.blue}
        opacity={props.box.opacity}
        blur={props.box.blur}
        onSetActiveBox={props.onSetActiveBox}
      ></FrostedGlassBox>
    </>
  );
}
