import styled from 'styled-components';

export default styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(calc(100% + 4px));
  display: ${(props) => (props.isActive ? 'grid' : 'none')};
  grid-template-columns: min-content min-content;
  gap: ${(props) => props.theme.spacing};
  padding: ${(props) => props.theme.spacing};
  margin-right: ${(props) => props.theme.spacing};
  background-color: ${(props) => props.theme.bg}${(props) => props.theme.backgroundOpacity};
  backdrop-filter: blur(${(props) => props.theme.backgroundBlur});
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.shadowOut},
    ${(props) => props.theme.shadowIn};
  z-index: 10;
`;
