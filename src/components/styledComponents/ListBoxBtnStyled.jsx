import styled from 'styled-components';

export default styled.button`
  height: calc(100% - 8px);
  width: calc(100% - 8px);
  grid-area: ${(props) =>
    props.duplicate ? 'duplicate' : props.remove ? 'remove' : 'edit'};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  color: transparent;
  background-color: transparent;

  transition-property: box-shadow, color, background-color;
  transition: 100ms ease;

  &:hover,
  &:focus-visible {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
    color: white !important;
    background-color: ${(props) =>
      props.duplicate ? '#ffff008b' : props.remove ? '#ff00008b' : '#32e2328b'};
  }

  &:active {
    box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.4);
  }
`;
