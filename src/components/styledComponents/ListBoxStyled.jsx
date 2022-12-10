import styled from 'styled-components';
import ColorBoxStyled from './ColorBoxStyled';
import TopBoxStyled from './TopBoxStyled';

export default styled(ColorBoxStyled, TopBoxStyled)`
  flex-shrink: 0;
  border: ${(props) => (props.isSelected ? '2px solid white' : '')};
  display: grid;
  grid-template-areas:
    'duplicate remove'
    'edit edit';
  overflow: hidden;
`;
