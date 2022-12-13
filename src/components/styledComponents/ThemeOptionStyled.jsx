import styled from 'styled-components';

export default styled.div`
  height: 30px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    ${(props) => props.colorTheme.fg} 0%,
    ${(props) => props.colorTheme.fg} 50%,
    ${(props) => props.colorTheme.bg} 50%
  );
  transform: rotate(45deg);
  box-shadow: ${(props) => props.theme.shadowOut},
    ${(props) => props.theme.shadowIn};
  outline-width: 3px;
  outline-style: solid;
  outline-offset: 2px;
  outline-color: ${(props) =>
    props.colorTheme.isSelected ? props.theme.fg : 'transparent'};
`;
