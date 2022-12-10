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
import img1small from '../backgroundImages/renato-pozzi-G4oGYy_ZcsQ-unsplash-small.jpg';
import img2small from '../backgroundImages/rohit-tandon-9wg5jCEPBsw-unsplash-small.jpg';
import img3small from '../backgroundImages/irene-alvarado-uuu3fIQpjoc-unsplash-small.jpg';
import img4small from '../backgroundImages/sangga-rima-roman-selia-aygPT62AlNQ-unsplash-small.jpg';
import img5small from '../backgroundImages/lucas-kapla-wQLAGv4_OYs-unsplash-small.jpg';
import img6small from '../backgroundImages/robert-katzki-jbtfM0XBeRc-unsplash-small.jpg';
import img7small from '../backgroundImages/yousef-espanioly-DA_tplYgTow-unsplash-small.jpg';
import img8small from '../backgroundImages/hiroko-yoshii-9y7y26C-l4Y-unsplash-small.jpg';
import img9small from '../backgroundImages/markus-spiske-Skf7HxARcoc-unsplash-small.jpg';

export default function BackgroundOptionsList(props) {
  const [backgroundOptions, setBackgroundOptions] = useState([
    createNewBackgroundOption(img1, img1small, 'Renato Pozzi', true),
    createNewBackgroundOption(img2, img2small, 'Rohit Tandon'),
    createNewBackgroundOption(img3, img3small, 'Irene Alvarado'),
    createNewBackgroundOption(img4, img4small, 'Sangga Rima Roman Selia'),
    createNewBackgroundOption(img5, img5small, 'Lucas Kapla'),
    createNewBackgroundOption(img6, img6small, 'Robert Katzki'),
    createNewBackgroundOption(img7, img7small, 'Yousef Espanioly'),
    createNewBackgroundOption(img8, img8small, 'Hiroko Yoshii'),
    createNewBackgroundOption(img9, img9small, 'Markus Spiske'),
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
          imageLocationSmall={option.imageLocationSmall}
          isSelected={option.isSelected}
          onSelectBackground={handleSelectBackground}
        ></ChangeBackgroundBtn>
      ))}
    </div>
  );
}

const createNewBackgroundOption = (
  imageLocation,
  imageLocationSmall,
  creator,
  select
) => {
  return {
    id: randomNumber(0, 999_999_999),
    imageLocation: imageLocation,
    imageLocationSmall: imageLocationSmall,
    creator: creator,
    isSelected: select === true ? true : false,
  };
};

// Creates a random integer between (and including) min and max
// TODO: make global version of this function
const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
