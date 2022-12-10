import styled from 'styled-components';
import BoxStyled from './BoxStyled';

export default styled(BoxStyled)`
  height: 80px;
  border-radius: 12px;
  flex-shrink: 0;
  border: ${(props) => (props.isSelected ? '2px solid white' : '')};
  display: grid;
  grid-template-areas:
    'duplicate remove'
    'edit edit';
  overflow: hidden;
`;
