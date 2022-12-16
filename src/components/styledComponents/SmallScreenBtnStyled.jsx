import styled from 'styled-components';

export default styled.button`
  display: ${(props) => (props.isSmallLayout ? 'block' : 'none')};
  height: 100%;
  width: 80px;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.fg};
  background-color: ${(props) => props.theme.bg}${(props) => props.theme.backgroundOpacity};
  backdrop-filter: blur(${(props) => props.theme.backgroundBlur});
  box-shadow: ${(props) => props.theme.shadowOut},
    ${(props) => props.theme.shadowIn};
  border-radius: 12px;
  cursor: pointer;
`;
