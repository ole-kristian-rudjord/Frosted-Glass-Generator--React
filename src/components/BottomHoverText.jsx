import React from 'react';
import BottomTextStyled from './styledComponents/BottomHoverTextStyled';

export default function BottomHoverText(props) {
  console.log(props);
  return (
    <BottomTextStyled bgColor={props.bgColor}>{props.text}</BottomTextStyled>
  );
}
