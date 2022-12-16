import styled from 'styled-components';
import BottomSideDivStyled from './BottomSideDivStyled';

export default styled(BottomSideDivStyled)`
  width: min-content;
  gap: calc(${(props) => props.theme.spacing} * 2);
  padding-top: calc(${(props) => props.theme.spacing} * 1.4);
  padding-bottom: calc(${(props) => props.theme.spacing} * 1.5);
  padding-left: calc(${(props) => props.theme.spacing} * 2);
  padding-right: calc(${(props) => props.theme.spacing} * 2);
`;
