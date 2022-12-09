import React, { useEffect, useState } from 'react';
import GlassBoxList from './components/BoxList';
import MainGlassBox from './components/BoxMain';
import Sliders from './components/Sliders';

export default function App() {
  const [boxes, setBoxes] = useState([
    createNewBox(),
    createNewBox(),
    createNewBox(),
  ]);

  const [activeBox, setActiveBox] = useState(boxes[0]);

  useEffect(() => {
    let boxesCopy = [...boxes];

    boxesCopy.forEach((box) => {
      box.isSelected = false;
    });

    const activeBoxIndex = boxes.findIndex((box) => {
      return box.id === activeBox.id;
    });

    if (boxesCopy[activeBoxIndex] !== undefined) {
      boxesCopy[activeBoxIndex].isSelected = true;
    }

    setBoxes(boxesCopy);
  }, [activeBox]);

  const handleNewBox = () => {
    setBoxes((boxes) => [createNewBox(), ...boxes]);
  };

  const handleActiveBoxById = (id) => {
    setActiveBox(
      boxes.find((box) => {
        return box.id === id;
      })
    );
  };

  const handleActiveBoxByIndex = (index) => {
    setActiveBox(boxes[index]);
  };

  const handleRemoveBox = (id) => {
    if (id === activeBox.id) {
      const activeBoxIndex = boxes.findIndex((box) => {
        return box.id === activeBox.id;
      });

      if (activeBoxIndex === boxes.length - 1) {
        handleActiveBoxByIndex(activeBoxIndex - 1);
      } else {
        handleActiveBoxByIndex(activeBoxIndex + 1);
      }
    }

    setBoxes((boxes) => {
      return boxes.filter((box) => box.id !== id);
    });
  };

  const handlePropertyChange = (property, value) => {
    let activeBoxCopy = { ...activeBox };

    switch (property) {
      case 'red':
        activeBoxCopy.red = value;
        break;
      case 'green':
        activeBoxCopy.green = value;
        break;
      case 'blue':
        activeBoxCopy.blue = value;
        break;
      case 'opacity':
        activeBoxCopy.opacity = value;
        break;
      case 'blur':
        activeBoxCopy.blur = value;
        break;
      default:
    }

    setActiveBox(activeBoxCopy);

    let boxesCopy = [...boxes];

    const boxIndex = boxes.findIndex((box) => {
      return box.id === activeBox.id;
    });

    boxesCopy[boxIndex][property] = value;

    setBoxes(boxesCopy);
  };

  return (
    <>
      <GlassBoxList
        boxes={boxes}
        onAddNewBox={handleNewBox}
        onSetActiveBox={handleActiveBoxById}
        onRemoveBox={handleRemoveBox}
      ></GlassBoxList>
      <MainGlassBox
        box={activeBox}
        onSetActiveBox={handleActiveBoxById}
      ></MainGlassBox>
      <Sliders
        box={activeBox}
        onPropertyChange={handlePropertyChange}
      ></Sliders>
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
    isSelected: false,
  };
};

const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
