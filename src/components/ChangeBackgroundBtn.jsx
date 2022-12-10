import React from 'react';

export default function ChangeBackgroundBtn(props) {
  return (
    <>
      <button
        style={{
          height: '100px',
          width: '150px',
          backgroundImage: `url(${props.imageLocation})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          border: 'none',
          outline: `${props.isSelected === true ? '3px solid white' : ''}`,
        }}
        onClick={() => props.onSelectBackground(props)}
      ></button>
    </>
  );
}
