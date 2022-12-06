import React, { useState } from 'react';
import GlassBoxList from './components/GlassBoxList';
import MainGlassBox from './components/MainGlassBox';
import Sliders from './components/Sliders';

export default function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [blur, setBlur] = useState(0);

  const [boxes, setBoxes] = useState([
    createNewBox(),
    createNewBox(),
    createNewBox(),
  ]);

  // console.log(boxes);

  function addNewBox() {
    const newBox = {
      id: randomNumber(0, 1_000_000),
      red: randomNumber(0, 255),
      green: randomNumber(0, 255),
      blue: randomNumber(0, 255),
      opacity: randomNumber(0, 100),
      blur: randomNumber(0, 10),
    };

    setBoxes((boxes) => [newBox, ...boxes]);

    /* console.log('Box added');
    console.log(boxes); */
  }

  function handlePropertyChange(property, value) {
    switch (property) {
      case 'red':
        setRed(value);
        break;
      case 'green':
        setGreen(value);
        break;
      case 'blue':
        setBlue(value);
        break;
      case 'blur':
        setBlur(value);
        break;
      case 'opacity':
        setOpacity(value);
        break;
      default:
        return null;
    }
  }

  return (
    <>
      <GlassBoxList boxes={boxes} onAddNewBox={addNewBox}></GlassBoxList>
      <MainGlassBox box={boxes[0]}></MainGlassBox>
      <Sliders
        red={red}
        green={green}
        blue={blue}
        opacity={opacity}
        blur={blur}
        onPropertyChange={handlePropertyChange}
      ></Sliders>
    </>
  );
}

const createNewBox = () => {
  return {
    red: randomNumber(0, 255),
    green: randomNumber(0, 255),
    blue: randomNumber(0, 255),
    opacity: randomNumber(20, 80),
    blur: randomNumber(1, 10),
  };
};

const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
