import styled from 'styled-components';

export default styled.button`
  height: 100px;
  position: relative;
  aspect-ratio: 16/10;
  border: none;
  border-radius: 6px;
  outline-style: solid;
  outline-color: ${(props) => (props.isSelected ? 'white' : 'transparent')};
  outline-width: ${(props) => (props.isSelected ? '4px' : '0')};
  overflow: hidden;

  transition: outline 100ms ease, box-shadow 100ms ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${(props) => props.imageLocationSmall});
    background-size: cover;
    transform-origin: center;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
    transition: transform 100ms ease;
  }

  &:hover,
  &:focus-visible {
    &::after {
      transform: scale(1.2);
    }
  }

  &:focus-visible {
    outline-width: 3px;
    outline-offset: 4px;
    outline-style: dashed;
  }
`;
