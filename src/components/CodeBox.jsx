import React from 'react';
import BoxCodeStyled from './styledComponents/BoxCodeStyled';

export default function CodeBox(props) {
  return (
    <BoxCodeStyled theme={props.theme}>
      #frosted-glass &#123; <br />
      &nbsp;background-color: rgba({props.red}, {props.green}, {props.blue},{' '}
      {props.opacity / 100}); <br />
      &nbsp;backdrop-filter: blur({props.blur}px); <br />
      &#125;
    </BoxCodeStyled>
  );
}
