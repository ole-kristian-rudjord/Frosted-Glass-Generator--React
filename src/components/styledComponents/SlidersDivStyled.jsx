import styled from 'styled-components';
import BottomSideDivStyled from './BottomSideDivStyled';

export default styled(BottomSideDivStyled)`
  width: min-content;
  gap: calc(${(props) => props.theme.spacing} * 2);
  padding: calc(${(props) => props.theme.spacing} * 1.5)
    calc(${(props) => props.theme.spacing} * 2);
`;
