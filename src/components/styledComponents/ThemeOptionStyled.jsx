import styled from 'styled-components';

export default styled.div`
  height: 30px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: linear-gradient(
    to bottom right,
    ${(props) => props.colorTheme.fg} 0%,
    ${(props) => props.colorTheme.fg} 49%,
    ${(props) => props.colorTheme.bg} 51%
  );
  box-shadow: ${(props) => props.theme.shadowOut},
    ${(props) => props.theme.shadowIn};
  outline-width: ${(props) => (props.colorTheme.isSelected ? '3px' : 0)};
  outline-style: solid;
  outline-offset: ${(props) => (props.colorTheme.isSelected ? '2px' : 0)};
  outline-color: ${(props) =>
    props.colorTheme.isSelected ? props.theme.fg : 'transparent'};
  cursor: pointer;

  transition: outline 100ms ease, transform 100ms ease;

  &:active {
    transform: scale(0.8);
  }
`;
