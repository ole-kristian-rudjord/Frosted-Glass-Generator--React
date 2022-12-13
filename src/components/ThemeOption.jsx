import React from 'react';
import ThemeOptionStyled from './styledComponents/ThemeOptionStyled';

export default function ThemeOption(props) {
  return (
    <ThemeOptionStyled
      onClick={() => props.onThemeSelect(props.id)}
      colorTheme={props.colorTheme}
      theme={props.theme}
    ></ThemeOptionStyled>
  );
}
