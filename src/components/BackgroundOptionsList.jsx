import React, { useEffect, useRef, useState } from 'react';
import ChangeBackgroundBtn from './ChangeBackgroundBtn';
import img1 from '../backgroundImages/renato-pozzi-G4oGYy_ZcsQ-unsplash.jpg';
import img2 from '../backgroundImages/rohit-tandon-9wg5jCEPBsw-unsplash.jpg';
import img3 from '../backgroundImages/irene-alvarado-uuu3fIQpjoc-unsplash.jpg';
import img4 from '../backgroundImages/sangga-rima-roman-selia-aygPT62AlNQ-unsplash.jpg';
import img5 from '../backgroundImages/lucas-kapla-wQLAGv4_OYs-unsplash.jpg';
import img6 from '../backgroundImages/robert-katzki-jbtfM0XBeRc-unsplash.jpg';
import img7 from '../backgroundImages/yousef-espanioly-DA_tplYgTow-unsplash.jpg';
import img8 from '../backgroundImages/hiroko-yoshii-9y7y26C-l4Y-unsplash.jpg';
import img9 from '../backgroundImages/markus-spiske-Skf7HxARcoc-unsplash.jpg';

export default function BackgroundOptionsList(props) {
  const [backgroundOptions, setBackgroundOptions] = useState([
    createNewBackgroundOption(img1, true),
    createNewBackgroundOption(img2),
    createNewBackgroundOption(img3),
    createNewBackgroundOption(img4),
    createNewBackgroundOption(img5),
    createNewBackgroundOption(img6),
    createNewBackgroundOption(img7),
    createNewBackgroundOption(img8),
    createNewBackgroundOption(img9),
    // createNewBackgroundOption(img10),
  ]);

  // When backgroundOptions[] changes
  useEffect(() => {
    // Finds selected option
    const selectedOption = backgroundOptions.find((option) => {
      return option.isSelected === true;
    });

    // Sets background-image
    document.getElementById(
      'box-container'
    ).style.backgroundImage = `url(${selectedOption.imageLocation})`;
  }, [backgroundOptions]);

  const handleSelectBackground = (clickedOption) => {
    // Sets all backgroundOptions's .isSelected to false
    backgroundOptions.forEach((option) => {
      option.isSelected = false;
    });

    // Finds index of the clicked backgroundOption
    const optionIndex = backgroundOptions.findIndex((option) => {
      return option.id === clickedOption.id;
    });

    // Makes copy of backgroundOptions[]
    let backgroundOptionsCopy = [...backgroundOptions];

    // Sets the clicked backgroundOption's .isSelected to true in backgroundOptionsCopy[]
    backgroundOptionsCopy[optionIndex].isSelected = true;

    // Updates original backgroundOptions[]
    setBackgroundOptions(backgroundOptionsCopy);
  };

  const optionsRef = useRef(null);
  useCloseOnOutsideClick(optionsRef);

  function useCloseOnOutsideClick(ref) {
    useEffect(() => {
      // Alert if clicked on outside of element
      function handleOutsideClick(e) {
        if (
          ref.current &&
          !ref.current.contains(e.target) &&
          e.target.id !== 'open-background-options'
        ) {
          props.onClose();
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [ref]);
  }

  return (
    <div
      ref={optionsRef}
      style={{
        position: 'absolute',
        right: '0',
        bottom: '0',
        transform: 'translateY(100%)',
        display: props.isActive === true ? 'grid' : 'none',
        gridTemplateColumns: 'min-content min-content',
        gap: '20px',
        padding: '20px',
        backgroundColor: 'orange',
      }}
    >
      {backgroundOptions.map((option, index) => (
        <ChangeBackgroundBtn
          key={index}
          id={option.id}
          imageLocation={option.imageLocation}
          isSelected={option.isSelected}
          onSelectBackground={handleSelectBackground}
        ></ChangeBackgroundBtn>
      ))}
    </div>
  );
}

const createNewBackgroundOption = (imageLocation, select) => {
  return {
    id: randomNumber(0, 999_999_999),
    imageLocation: imageLocation,
    isSelected: select === true ? true : false,
  };
};

// Creates a random integer between (and including) min and max
// TODO: make global version of this function
const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
