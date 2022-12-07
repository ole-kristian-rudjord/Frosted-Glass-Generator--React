import React from 'react';
import FrostedGlassBox from './FrostedGlassBox';

export default function MainGlassBox(props) {
  return (
    <>
      <FrostedGlassBox
        id={props.box.id}
        red={props.box.red}
        green={props.box.green}
        blue={props.box.blue}
        opacity={props.box.opacity}
        blur={props.box.blur}
        type="main"
        isSelected={props.box.isSelected}
        onSetActiveBox={props.onSetActiveBox}
        onRemoveBox={props.onRemoveBox}
      ></FrostedGlassBox>
    </>
  );
}
