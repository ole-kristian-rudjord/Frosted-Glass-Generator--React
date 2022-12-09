import React from 'react';

export default function ChangeBackgroundBtn(props) {
  return (
    <>
      <button
        style={{
          height: '200px',
          width: '300px',
          backgroundImage: `url(${props.imgUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          outline: `${props.isSelected === true ? '3px solid white' : ''}`,
        }}
      ></button>
    </>
  );
}
