import React from 'react';
import ChangeBackgroundBtnStyled from './styledComponents/ChangeBackgroundBtnStyled';

export default function ChangeBackgroundBtn(props) {
  return (
    <>
      <ChangeBackgroundBtnStyled
        imageLocationSmall={props.imageLocationSmall}
        isSelected={props.isSelected}
        onClick={() => props.onSelectBackground(props)}
      ></ChangeBackgroundBtnStyled>
    </>
  );
}
