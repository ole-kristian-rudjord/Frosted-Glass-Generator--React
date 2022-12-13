import styled from 'styled-components';
import BoxScaleStyled from './BoxScaleStyled';

export default styled(BoxScaleStyled)`
  height: 75px;
  position: relative;
  color: white;
  background-color: ${(props) => props.theme.bg}BC;
  backdrop-filter: blur(4px);
  grid-column: ${(props) => (props.first ? '1/2' : '3/4')};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.3), inset 0 0 12px rgba(0, 0, 0, 0.75);
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
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.3),
      inset 0 0 24px rgba(0, 0, 0, 0.9);
    font-size: 1.8rem;
    backdrop-filter: blur(8px);
  }

  &:active {
    transition: 50ms ease;
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.3),
      inset 0 0 32px rgba(0, 0, 0, 0.9);
  }
`;
