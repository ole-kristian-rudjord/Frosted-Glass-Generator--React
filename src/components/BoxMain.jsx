import React from 'react';
import Box from './Box';

export default function BoxMain(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Does not create main box if it is not defined */}
      {props.box !== undefined && (
        <Box
          id={props.box.id}
          red={props.box.red}
          green={props.box.green}
          blue={props.box.blue}
          opacity={props.box.opacity}
          blur={props.box.blur}
          isSelected={props.box.isSelected}
          type="main"
        ></Box>
      )}
    </div>
  );
}
