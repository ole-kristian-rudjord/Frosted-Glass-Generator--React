import React, { useState, useLayoutEffect } from 'react';
import BoxCodeStyled from './styledComponents/BoxCodeStyled';
import SmallScreenBtnStyled from './styledComponents/SmallScreenBtnStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import ThemeDivStyled from './styledComponents/ThemeDivStyled';

library.add(faCode);

export default function CodeBox(props) {
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
    <ThemeDivStyled>
      <SmallScreenBtnStyled
        theme={props.theme}
        isSmallLayout={isSmallLayout}
        onClick={handleThemeSelectorActive}
      >
        <FontAwesomeIcon icon="code" />
      </SmallScreenBtnStyled>
      <BoxCodeStyled
        theme={props.theme}
        isSmallLayout={isSmallLayout}
        isThemeSelectorActive={isThemeSelectorActive}
      >
        #frosted-glass &#123; <br />
        &nbsp;background-color: rgba(
        {props.box !== undefined ? props.box.red : 0},{' '}
        {props.box !== undefined ? props.box.green : 0},{' '}
        {props.box !== undefined ? props.box.blue : 0},{' '}
        {props.box !== undefined ? props.box.opacity / 100 : 0}); <br />
        &nbsp;backdrop-filter: blur(
        {props.box !== undefined ? props.box.blur : 0}px); <br />
        &#125;
      </BoxCodeStyled>
    </ThemeDivStyled>
  );
}
