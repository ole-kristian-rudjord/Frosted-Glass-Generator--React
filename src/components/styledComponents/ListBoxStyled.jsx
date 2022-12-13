import styled from 'styled-components';
import ColorBoxStyled from './ColorBoxStyled';
import ListBoxBtnStyled from './ListBoxBtnStyled';

export default styled(ColorBoxStyled)`
  height: 75px;
  flex-shrink: 0;
  outline-style: solid;
  outline-color: ${(props) =>
    props.isSelected ? props.theme.fg : props.theme.fg + 'DR0'};
  outline-width: ${(props) => (props.isSelected ? '3px' : '0')};
  display: grid;
  grid-template-areas:
    'duplicate remove'
    'edit edit';
  place-items: center;

  transition: outline 50ms ease;

  &:hover ${ListBoxBtnStyled} {
    color: #ffffff8b;
  }
`;
