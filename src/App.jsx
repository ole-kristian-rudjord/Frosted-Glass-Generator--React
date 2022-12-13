import React, { useEffect, useState } from 'react';
// The fact that these three imports line up perfectly makes my brain happy
import BoxList from './components/BoxList';
import MainBox from './components/BoxMain';
import Sliders from './components/Sliders';

export default function App() {
  const [boxes, setBoxes] = useState([
    createNewBox(),
    createNewBox(),
    createNewBox(),
    createNewBox(),
    createNewBox(),
    createNewBox(),
  ]);

  const [activeBox, setActiveBox] = useState(boxes[0]);

  // Update the selected box (main box) whenever activeBox is changed
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
    // eslint-disable-next-line
  }, [activeBox]);

  // Sets activeBox if a new box is created and it is the only one
  useEffect(() => {
    if (boxes.length === 1) {
      setActiveBox(boxes[0]);
    }
  }, [boxes]);

  const handleNewBox = () => {
    setBoxes((boxes) => [createNewBox(), ...boxes]);
  };

  const handleDuplicateBox = (props) => {
    // Finds index of the box being duplicated
    const boxIndex = boxes.findIndex((box) => {
      return box.id === props.id;
    });

    // Adds the new duplicate after the original box
    setBoxes((boxes) => [
      ...boxes.slice(0, boxIndex + 1),
      createNewBox(props),
      ...boxes.slice(boxIndex + 1),
    ]);
  };

  const handleRemoveBox = (id) => {
    // If the removed box is the activeBox
    if (id === activeBox.id) {
      const activeBoxIndex = boxes.findIndex((box) => {
        return box.id === activeBox.id;
      });

      if (activeBoxIndex === boxes.length - 1) {
        // If activeBox is the last box, set activeBox to the previous box
        handleActiveBoxByIndex(activeBoxIndex - 1);
      } else {
        // Else, set activeBox to the next box
        handleActiveBoxByIndex(activeBoxIndex + 1);
      }
    }

    // Removes box
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

  // Handle changes to mainBox/activeBox made when using sliders
  const handlePropertyChange = (property, value) => {
    // Creates copy of activeBox
    let activeBoxCopy = { ...activeBox };

    // Changes the property of the copy
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

    // Set activeBox to the copy
    setActiveBox(activeBoxCopy);

    // Creates copy of boxes[]
    let boxesCopy = [...boxes];

    // Finds the box that is being changed
    const boxIndex = boxes.findIndex((box) => {
      return box.id === activeBox.id;
    });

    // Changes the box in boxesCopy[]
    boxesCopy[boxIndex][property] = value;

    // Set boxes[] to the copy
    setBoxes(boxesCopy);
  };

  const theme = {
    fg: 'white',
    bg: '#077070',
    spacing: '20px',
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr min-content',
        height: '100vh',
      }}
    >
      <div
        style={{
          gridRow: '1/2',
          display: 'grid',
          gridTemplateRows: 'min-content 1fr',
          backgroundImage: '',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
        id="box-container"
      >
        <BoxList
          boxes={boxes}
          onAddNewBox={handleNewBox}
          onDuplicateBox={handleDuplicateBox}
          onRemoveBox={handleRemoveBox}
          onSetActiveBox={handleActiveBoxById}
          theme={theme}
        ></BoxList>
        <MainBox box={activeBox}></MainBox>
      </div>
      <Sliders
        style={{ gridRow: '2/3' }}
        box={activeBox}
        onPropertyChange={handlePropertyChange}
        theme={theme}
      ></Sliders>
    </div>
  );
}

const createNewBox = (props) => {
  // If properties are undefined, create random box
  return {
    id: randomNumber(0, 999_999_999), // TODO: create unique ID instead of random number
    red: props === undefined ? randomNumber(25, 255) : props.red,
    green: props === undefined ? randomNumber(25, 255) : props.green,
    blue: props === undefined ? randomNumber(25, 255) : props.blue,
    opacity: props === undefined ? randomNumber(30, 80) : props.opacity,
    blur: props === undefined ? randomNumber(1, 10) : props.blur,
    isSelected: false,
  };
};

// Creates a random integer between (and including) min and max
// TODO: make global version of this function
const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
