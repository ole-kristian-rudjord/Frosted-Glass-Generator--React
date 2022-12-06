import React, { useState } from 'react';

export default function FrostedGlassBox() {
  const [red, setRed] = useState(55);
  const [green, setGreen] = useState(84);
  const [blue, setBlue] = useState(125);
  const [blur, setBlur] = useState(3);
  const [opacity, setOpacity] = useState(50);

  return (
    <>
      <div
        style={{
          height: '200px',
          width: '300px',
          backgroundColor: `rgba(${red},${green},${blue},${opacity / 100})`,
          backdropFilter: `blur(${blur}px)`,
        }}
      ></div>
    </>
  );
}
