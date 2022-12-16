import styled from 'styled-components';
import BottomSideDivStyled from './BottomSideDivStyled';

export default styled(BottomSideDivStyled)`
  position: ${(props) => (props.isSmallLayout ? 'absolute' : 'unset')};
  top: 0;
  right: 0;
  transform: ${(props) =>
    props.isSmallLayout ? 'translateY(calc(-100% - 10px))' : 'unset'};
  display: ${(props) =>
    props.isSmallLayout
      ? props.isThemeSelectorActive
        ? 'flex'
        : 'none'
      : 'flex'};
  height: 100%;
  width: 350px;
  white-space: nowrap;
  font-family: monospace;
  font-size: 0.8rem;
`;
