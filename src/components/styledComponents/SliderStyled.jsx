import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 160px;

  & label {
    font-size: 1rem;
    font-family: sans-serif;
  }

  & input {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 10px;
    background-color: ${(props) =>
      props.color === 'red'
        ? 'red'
        : props.color === 'green'
        ? 'green'
        : props.color === 'blue'
        ? 'blue'
        : 'yellow'};
    overflow: hidden;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      outline: 5px solid white;
      background-color: ${(props) => props.color};
      cursor: pointer;
    }

    /* &::-moz-range-thumb {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      outline: 5px solid white;
      background-color: ${(props) => props.color};
      cursor: pointer;
    } */
  }
`;
