import styled from 'styled-components';
import TopBoxStyled from './TopBoxStyled';

export default styled(TopBoxStyled)`
  color: ${(props) => props.secondColor};
  background-color: ${(props) => props.mainColor}B3;
  backdrop-filter: blur(8px);
  border: 2px solid ${(props) => props.secondColor};
  grid-column: ${(props) => (props.first ? '1/2' : '3/4')};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: white;
  }
`;
