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

  useEffect(() => {
    if (boxes.length === 1) {
      setActiveBox(boxes[0]);
    }
  }, [boxes]);

  const handleNewBox = () => {
    setBoxes((boxes) => [createNewBox(), ...boxes]);
  };

  const handleDuplicateBox = (props) => {
    const boxIndex = boxes.findIndex((box) => {
      return box.id === props.id;
    });

    setBoxes((boxes) => [
      ...boxes.slice(0, boxIndex + 1),
      createNewBox(props),
      ...boxes.slice(boxIndex + 1),
    ]);
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
        onDuplicateBox={handleDuplicateBox}
        onRemoveBox={handleRemoveBox}
        onSetActiveBox={handleActiveBoxById}
      ></GlassBoxList>
      <MainGlassBox box={activeBox}></MainGlassBox>
      <Sliders
        box={activeBox}
        onPropertyChange={handlePropertyChange}
      ></Sliders>
    </>
  );
}

const createNewBox = (props) => {
  return {
    id: randomNumber(0, 999_999_999), // TODO: create unique ID instead of random number
    red: props === undefined ? randomNumber(0, 255) : props.red,
    green: props === undefined ? randomNumber(0, 255) : props.green,
    blue: props === undefined ? randomNumber(0, 255) : props.blue,
    opacity: props === undefined ? randomNumber(20, 70) : props.opacity,
    blur: props === undefined ? randomNumber(1, 10) : props.blur,
    isSelected: false,
  };
};

const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
