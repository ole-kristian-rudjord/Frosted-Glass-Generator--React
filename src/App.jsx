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

  function addNewBox() {
    setBoxes((boxes) => [createNewBox(), ...boxes]);
  }

  function handleActiveBox(id) {
    setActiveBox(
      boxes.find((obj) => {
        return obj.id === id;
      })
    );
  }

  function handlePropertyChange(property, value) {
    let box = { ...activeBox };
    let boxList = [...boxes];

    switch (property) {
      case 'red':
        box.red = value;
        break;
      case 'green':
        box.green = value;
        break;
      case 'blue':
        box.blue = value;
        break;
      case 'opacity':
        box.opacity = value;
        break;
      case 'blur':
        box.blur = value;
        break;
      default:
    }

    setActiveBox(box);

    const boxIndex = boxes.findIndex((obj) => {
      return obj.id === activeBox.id;
    });

    boxList[boxIndex][property] = value;

    setBoxes(boxList);
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
      <h1>{activeBox.red}</h1>
    </>
  );
}

const createNewBox = () => {
  return {
    id: randomNumber(0, 999_999_999), // TODO: create unique ID instead of random number
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
