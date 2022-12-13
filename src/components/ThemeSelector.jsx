import React from 'react';
import ThemeSelectorStyled from './styledComponents/ThemeSelectorStyled';
import ThemeOption from './ThemeOption';

export default function ThemeSelector(props) {
  return (
    <ThemeSelectorStyled theme={props.theme}>
      {props.colorThemes.map((colorTheme, index) => (
        <ThemeOption
          key={index}
          id={colorTheme.id}
          onThemeSelect={props.onThemeSelect}
          colorTheme={colorTheme}
          theme={props.theme}
        ></ThemeOption>
      ))}
    </ThemeSelectorStyled>
  );
}
