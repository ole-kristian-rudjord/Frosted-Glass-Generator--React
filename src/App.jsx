import React, { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
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

  useEffect(() => {
    let boxList = [...boxes];

    boxList.forEach((box) => {
      box.isSelected = false;
    });

    const boxIndex = boxes.findIndex((obj) => {
      return obj.id === activeBox.id;
    });

    if (boxList[boxIndex] !== undefined) {
      boxList[boxIndex].isSelected = true;
    }

    setBoxes(boxList);
  }, [activeBox]);

  function addNewBox() {
    setBoxes((boxes) => [createNewBox(), ...boxes]);
  }

  function handleActiveBoxById(id) {
    setActiveBox(
      boxes.find((obj) => {
        return obj.id === id;
      })
    );
  }

  function handleActiveBoxByIndex(index) {
    setActiveBox(boxes[index]);
  }

  // TODO: handle removal of box when it is the last one
  const handleRemoveBox = (id) => {
    // if (id === activeBox.id) {
    //   const boxIndex = boxes.findIndex((obj) => {
    //     return obj.id === activeBox.id;
    //   });
    //   if (boxIndex === boxes.length - 1) {
    //     console.log('removed activeBox last');
    //     handleActiveBoxByIndex(boxIndex - 1);
    //   } else {
    //     console.log('removed activeBox');
    //     handleActiveBoxByIndex(boxIndex + 1);
    //   }
    // }
    setBoxes((boxes) => {
      return boxes.filter((box) => box.id !== id);
    });
    if (id === activeBox.id) {
      const boxIndex = boxes.findIndex((obj) => {
        return obj.id === activeBox.id;
      });
      if (boxIndex === boxes.length - 1) {
        console.log('removed activeBox last');
        handleActiveBoxByIndex(boxIndex - 1);
      } else {
        console.log('removed activeBox');
        handleActiveBoxByIndex(boxIndex + 1);
      }
    }
  };

  function handlePropertyChange(property, value) {
    let box = { ...activeBox };

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

    let boxList = [...boxes];

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
        onSetActiveBox={handleActiveBoxById}
        onRemoveBox={handleRemoveBox}
      ></GlassBoxList>
      <MainGlassBox
        box={activeBox}
        onSetActiveBox={handleActiveBoxById}
      ></MainGlassBox>
      <Sliders
        /* red={activeBox.red}
        green={activeBox.green}
        blue={activeBox.blue}
        opacity={activeBox.opacity}
        blur={activeBox.blur} */
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
