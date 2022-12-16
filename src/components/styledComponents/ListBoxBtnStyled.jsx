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
  cursor: pointer;

  transition-property: box-shadow, color, background-color;
  transition: 100ms ease;

  &:hover,
  &:focus-visible {
    /* box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3); */
    box-shadow: ${(props) => props.theme.shadowIn};
    color: white !important;
    background-color: ${(props) =>
      props.duplicate ? '#d3d3009f' : props.remove ? '#ff0000a0' : '#32e232a0'};
  }

  &:active {
    /* box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.4); */
    box-shadow: ${(props) => props.theme.shadowIn2};
  }
`;
