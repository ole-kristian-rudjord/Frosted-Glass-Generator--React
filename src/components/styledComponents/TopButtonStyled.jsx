import styled from 'styled-components';
import BoxScaleStyled from './BoxScaleStyled';

export default styled(BoxScaleStyled)`
  /* height: 80px;
  position: relative;
  color: ${(props) => props.secondColor};
  background-color: ${(props) => props.mainColor}B3;
  backdrop-filter: blur(6px);
  border: 2px solid ${(props) => props.secondColor};
  grid-column: ${(props) => (props.first ? '1/2' : '3/4')};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  transition-property: backdrop-filter, font-size, color;
  transition: 100ms ease;

  &:hover {
    backdrop-filter: blur(10px);
    font-size: 1.8rem;
    color: white;
  } */

  height: 80px;
  position: relative;
  color: white;
  background-color: ${(props) => props.mainColor}B3;
  backdrop-filter: blur(4px);
  /* border: 2px solid white; */
  grid-column: ${(props) => (props.first ? '1/2' : '3/4')};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 12px black;
  margin: ${(props) => props.spacing};

  transition: box-shadow 200ms ease, font-size 200ms ease,
    backdrop-filter 200ms ease;

  &:hover {
    box-shadow: inset 0 0 24px black;
    font-size: 1.8rem;
    backdrop-filter: blur(8px);
  }
`;
