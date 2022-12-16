import styled from 'styled-components';
import BottomSideDivStyled from './BottomSideDivStyled';

export default styled(BottomSideDivStyled)`
  position: ${(props) => (props.isSmallLayout ? 'absolute' : 'unset')};
  top: 0;
  left: 0;
  transform: ${(props) =>
    props.isSmallLayout ? 'translateY(calc(-100% - 10px))' : 'unset'};
  display: ${(props) =>
    props.isSmallLayout
      ? props.isThemeSelectorActive
        ? 'flex'
        : 'none'
      : 'flex'};
  gap: ${(props) => props.theme.spacing};
  height: 100%;
`;
