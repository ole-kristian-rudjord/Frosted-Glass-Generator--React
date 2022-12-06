import React, { useState } from 'react';
import GlassBoxList from './components/GlassBoxList';
import MainGlassBox from './components/MainGlassBox';
import Sliders from './components/Sliders';

export default function App() {
  const [boxes, setBoxes] = useState([
    createNewBox(),
    createNewBox(),
    createNewBox(),
  ]);

  const [activeBox, setActiveBox] = useState(boxes[0]);

  /* const [red, setRed] = useState(activeBox.red);
  const [green, setGreen] = useState(activeBox.green);
  const [blue, setBlue] = useState(activeBox.blue);
  const [opacity, setOpacity] = useState(activeBox.opacity);
  const [blur, setBlur] = useState(activeBox.blur); */

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
        activeBox.red = value;
        break;
      case 'green':
        activeBox.green = value;
        break;
      case 'blue':
        activeBox.blue = value;
        break;
      case 'opacity':
        activeBox.opacity = value;
        break;
      case 'blur':
        activeBox.blur = value;
        break;
      default:
        return null;
    }
  }

  function handleActiveBox(box) {
    setActiveBox(box);
  }

  return (
    <>
      <GlassBoxList
        boxes={boxes}
        onAddNewBox={addNewBox}
        onSetActiveBox={handleActiveBox}
      ></GlassBoxList>
      <MainGlassBox
        box={activeBox}
        onSetActiveBox={handleActiveBox}
      ></MainGlassBox>
      <Sliders
        red={activeBox.red}
        green={activeBox.green}
        blue={activeBox.blue}
        opacity={activeBox.opacity}
        blur={activeBox.blur}
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
    opacity: randomNumber(20, 70),
    blur: randomNumber(1, 10),
  };
};

const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
