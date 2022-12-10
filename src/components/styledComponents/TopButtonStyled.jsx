import styled from 'styled-components';
import TopBoxStyled from './TopBoxStyled';

export default styled(TopBoxStyled)`
  color: white;
  background-color: ${(props) => props.mainColor}ce;
  backdrop-filter: blur(8px);
  border: 2px solid ${(props) => props.secondColor};
  grid-column: ${(props) => (props.first ? '1/2' : '3/4')};
`;
