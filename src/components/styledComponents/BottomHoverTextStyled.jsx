import styled from 'styled-components';

export default styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20px;
  font-size: 1rem;
  text-align: center;
  color: white;
  opacity: ${(props) => (props.bgColor === undefined ? '1' : '1')};
  background-color: ${(props) => props.bgColor};
  border-radius: 0 0 8px 8px;
  transform: ${(props) =>
    props.bgColor === undefined ? 'translateY(0)' : 'translateY(100%)'};
  pointer-events: none;
  z-index: -1;

  transition: opacity 150ms ease, background-color 100ms ease,
    transform 100ms ease;
`;
