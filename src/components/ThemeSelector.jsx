import React, { useState, useLayoutEffect } from 'react';
import ThemeSelectorStyled from './styledComponents/ThemeSelectorStyled';
import ThemeOption from './ThemeOption';
import SmallScreenBtnStyled from './styledComponents/SmallScreenBtnStyled';
import ThemeDivStyled from './styledComponents/ThemeDivStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

library.add(faPalette);

export default function ThemeSelector(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isThemeSelectorActive, setIsThemeSelectorActive] = useState(false);

  useLayoutEffect(() => {
    function updateWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const isSmallLayout = windowWidth < 1380;

  const handleThemeSelectorActive = () => {
    setIsThemeSelectorActive(!isThemeSelectorActive);
  };

  return (
    <ThemeDivStyled theme={props.theme}>
      <SmallScreenBtnStyled
        theme={props.theme}
        isSmallLayout={isSmallLayout}
        onClick={handleThemeSelectorActive}
      >
        <FontAwesomeIcon icon="palette" />
      </SmallScreenBtnStyled>
      <ThemeSelectorStyled
        theme={props.theme}
        isSmallLayout={isSmallLayout}
        isThemeSelectorActive={isThemeSelectorActive}
      >
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
    </ThemeDivStyled>
  );
}
