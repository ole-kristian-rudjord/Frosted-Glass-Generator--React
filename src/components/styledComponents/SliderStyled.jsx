import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(${(props) => props.theme.spacing});
  width: 140px;

  & label {
    font-size: 0.98rem;
    font-family: sans-serif;
    color: ${(props) => props.theme.fg};
    word-spacing: 1px;
  }

  & label > span {
    font-size: 0.92rem;
  }

  & label:first-letter {
    text-transform: capitalize;
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
      transition: transform 100ms ease, box-shadow 100ms ease;

      &:hover {
        border-width: 2px;
        box-shadow: ${(props) => props.theme.shadowOut};
        transform: scale(1.1);
      }
    }

    &::-moz-range-thumb {
      outline: none;
      width: 11px;
      height: 11px;
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
  }
`;
