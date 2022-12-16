import React, { useEffect, useState } from 'react';
import BoxList from './components/BoxList';
import MainBox from './components/BoxMain';
import Sliders from './components/Sliders';
import CodeBox from './components/CodeBox';
import BottomDivStyled from './components/styledComponents/BottomDivStyled';
import ThemeSelector from './components/ThemeSelector';
import AllContentStyled from './components/styledComponents/AllContentStyled';
import TopDivStyled from './components/styledComponents/TopDivStyled';

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

  const [colorThemes, setColorThemes] = useState([
    {
      fg: '#FFFFFF',
      bg: '#0088A3',
      id: 1,
      isSelected: false,
    },
    {
      fg: '#82ffd5',
      bg: '#b81818',
      id: 2,
      isSelected: false,
    },
    {
      fg: '#f3b91a',
      bg: '#1b5825',
      id: 3,
      isSelected: false,
    },
    {
      fg: '#e722dd',
      bg: '#380000',
      id: 4,
      isSelected: false,
    },
    {
      fg: '#ffa0a0',
      bg: '#270f7e',
      id: 5,
      isSelected: false,
    },
  ]);

  const [activeColorTheme, setActiveColorTheme] = useState(colorThemes[0]);

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

  // Update the selected colorTheme whenever colorTheme is changed
  useEffect(() => {
    let colorThemesCopy = [...colorThemes];

    colorThemesCopy.forEach((colorTheme) => {
      colorTheme.isSelected = false;
    });

    const activeColorThemeIndex = colorThemesCopy.findIndex((colorTheme) => {
      return colorTheme.id === activeColorTheme.id;
    });

    if (colorThemesCopy[activeColorThemeIndex] !== undefined) {
      colorThemesCopy[activeColorThemeIndex].isSelected = true;
    }

    setColorThemes(colorThemesCopy);
    // eslint-disable-next-line
  }, [activeColorTheme]);

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
    fg: activeColorTheme.fg,
    bg: activeColorTheme.bg,
    spacing: '20px',
    backgroundOpacity: 'BF',
    backgroundBlur: '3px',
    shadowOut: '0 0 8px 2px rgba(0,0,0,0.1)',
    shadowIn: 'inset 0 0 6px rgba(0,0,0,0.15)',
    shadowIn2: 'inset 0 0 16px rgba(0,0,0,0.2)',
    shadowIn3: 'inset 0 0 24px rgba(0,0,0,0.3)',
  };

  const handleActiveColorThemeById = (id) => {
    setActiveColorTheme(
      colorThemes.find((colorTheme) => {
        return colorTheme.id === id;
      })
    );
  };

  return (
    <AllContentStyled>
      <TopDivStyled id="box-container">
        <BoxList
          boxes={boxes}
          onAddNewBox={handleNewBox}
          onDuplicateBox={handleDuplicateBox}
          onRemoveBox={handleRemoveBox}
          onSetActiveBox={handleActiveBoxById}
          theme={theme}
        ></BoxList>
        <MainBox box={activeBox} theme={theme}></MainBox>
      </TopDivStyled>
      <BottomDivStyled theme={theme}>
        {
          <ThemeSelector
            onThemeSelect={handleActiveColorThemeById}
            color
            colorThemes={colorThemes}
            theme={theme}
          ></ThemeSelector>
        }
        <Sliders
          box={activeBox}
          onPropertyChange={handlePropertyChange}
          theme={theme}
        ></Sliders>
        <CodeBox
          red={activeBox.red}
          green={activeBox.green}
          blue={activeBox.blue}
          opacity={activeBox.opacity}
          blur={activeBox.blur}
          theme={theme}
        ></CodeBox>
      </BottomDivStyled>
    </AllContentStyled>
  );
}

const createNewBox = (props) => {
  // If properties are undefined, create random box
  return {
    id: randomNumber(0, 999_999_999), // TODO: create unique ID instead of random number
    red: props === undefined ? randomNumber(25, 255) : props.red,
    green: props === undefined ? randomNumber(25, 255) : props.green,
    blue: props === undefined ? randomNumber(25, 255) : props.blue,
    opacity: props === undefined ? randomNumber(40, 80) : props.opacity,
    blur: props === undefined ? randomNumber(1, 10) : props.blur,
    isSelected: false,
  };
};

// Creates a random integer between (and including) min and max
// TODO: make global version of this function
const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
