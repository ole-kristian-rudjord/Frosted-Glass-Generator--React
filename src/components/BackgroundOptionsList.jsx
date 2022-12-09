import React, { useEffect, useState } from 'react';
import ChangeBackgroundBtn from './ChangeBackgroundBtn';

export default function BackgroundOptionsList() {
  const [backgroundOptions, setBackgroundOptions] = useState([
    createNewBackgroundOption(
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      true
    ),
    createNewBackgroundOption(
      'https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vdW50YWluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    ),
    createNewBackgroundOption(
      'https://images.unsplash.com/photo-1658494330378-4716bf247bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ),
    createNewBackgroundOption(
      'https://images.unsplash.com/photo-1669459327291-2c972092f6bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ),
    createNewBackgroundOption(
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    ),
    createNewBackgroundOption(
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ),
    createNewBackgroundOption(
      'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJ1Z3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    ),
    createNewBackgroundOption(
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    ),
    createNewBackgroundOption(
      'https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ),
    createNewBackgroundOption(
      'https://images.unsplash.com/photo-1513553404607-988bf2703777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2NlYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ),
  ]);

  useEffect(() => {
    const selectedOption = backgroundOptions.find((option) => {
      return option.isSelected === true;
    });
    document.getElementById(
      'root'
    ).style.backgroundImage = `url(${selectedOption.imgUrl})`;
  }, [backgroundOptions]);

  const handleSelectBackground = (clickedOption) => {
    backgroundOptions.forEach((option) => {
      option.isSelected = false;
    });

    const optionIndex = backgroundOptions.findIndex((option) => {
      return option.id === clickedOption.id;
    });

    let backgroundOptionsCopy = [...backgroundOptions];

    backgroundOptionsCopy[optionIndex].isSelected = true;

    setBackgroundOptions(backgroundOptionsCopy);
  };

  return (
    <div
      style={{
        position: 'absolute',
        right: '0',
        bottom: '0',
        transform: 'translateY(100%)',
        display: 'grid',
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
          imgUrl={option.imgUrl}
          isSelected={option.isSelected}
          onSelectBackground={handleSelectBackground}
        ></ChangeBackgroundBtn>
      ))}
    </div>
  );
}

const createNewBackgroundOption = (imgUrl, select) => {
  return {
    id: randomNumber(0, 999_999_999),
    imgUrl: imgUrl,
    isSelected: select === true ? true : false,
  };
};

// Creates a random integer between (and including) min and max
// TODO: make global version of this function
const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
