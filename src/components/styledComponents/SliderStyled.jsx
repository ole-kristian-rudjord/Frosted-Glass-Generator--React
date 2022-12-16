import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(${(props) => props.theme.spacing});
  width: 140px;

  & label {
    font-size: 0.95rem;
    font-family: sans-serif;
    color: ${(props) => props.theme.fg};
    text-transform: uppercase;
  }

  & input {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.fg}${(props) => props.theme.backgroundOpacity};
    box-shadow: ${(props) => props.theme.shadowOut},
      ${(props) => props.theme.shadowIn};

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      border: 3px solid ${(props) => props.theme.fg};
      background-color: ${(props) =>
        props.color === 'red'
          ? 'red'
          : props.color === 'green'
          ? 'green'
          : props.color === 'blue'
          ? 'blue'
          : props.theme.bg};
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
