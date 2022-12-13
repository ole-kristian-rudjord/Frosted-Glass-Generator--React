import styled from 'styled-components';
import BoxScaleStyled from './BoxScaleStyled';

export default styled(BoxScaleStyled)`
  height: 75px;
  position: relative;
  color: ${(props) => props.theme.fg};
  background-color: ${(props) => props.theme.bg}${(props) => props.theme.backgroundOpacity};
  backdrop-filter: blur(${(props) => props.theme.backgroundBlur});
  grid-column: ${(props) => (props.first ? '1/2' : '3/4')};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.3), inset 0 0 12px rgba(0, 0, 0, 0.75); */
  box-shadow: ${(props) => props.theme.shadowOut},
    ${(props) => props.theme.shadowIn};
  margin-top: ${(props) => props.theme.spacing};
  margin-right: ${(props) => (props.first ? '0' : props.theme.spacing)};
  margin-bottom: ${(props) => props.theme.spacing};
  margin-left: ${(props) => (props.last ? '0' : props.theme.spacing)};
  border: none;
  cursor: pointer;

  transition: box-shadow 200ms ease, font-size 100ms ease,
    backdrop-filter 200ms ease;

  &:hover,
  &:focus-visible {
    box-shadow: ${(props) => props.theme.shadowOut},
      ${(props) => props.theme.shadowIn2};
    font-size: 1.8rem;
    backdrop-filter: blur(calc(${(props) => props.theme.backgroundBlur} * 2));
  }

  &:active {
    transition: 50ms ease;
    box-shadow: ${(props) => props.theme.shadowOut},
      ${(props) => props.theme.shadowIn3};
  }
`;
