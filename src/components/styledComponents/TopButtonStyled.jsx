import styled from 'styled-components';
import BoxScaleStyled from './BoxScaleStyled';

export default styled(BoxScaleStyled)`
  height: 80px;
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

  /* &::after {
    content: 'Test Text' ${(props) => props.hoverText};
    position: absolute;
    left: 50%;
    bottom: 0;
    width: calc(100% + 2px);
    font-size: 1rem;
    text-align: center;
    color: white;
    background-color: ${(props) => props.secondColor};
    padding-top: 2px;
    border-radius: 0 0 12px 12px;
    opacity: 0;
    transform: translate(-50%, calc(100% - 1px));

    transition-property: opacity, transform;
    transition: 100ms ease;
  } */

  &:hover {
    backdrop-filter: blur(10px);
    font-size: 1.8rem;
    color: white;

    /* &::after {
      opacity: 1;
      transform: translate(-50%, 100%);
    } */
  }
`;
