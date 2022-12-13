import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 calc(${(props) => props.theme.spacing});
  border-radius: 12px;
  backdrop-filter: blur(${(props) => props.theme.backgroundBlur});
  color: ${(props) => props.theme.fg};
  background-color: ${(props) => props.theme.bg}${(props) => props.theme.backgroundOpacity};
  box-shadow: ${(props) => props.theme.shadowOut},
    ${(props) => props.theme.shadowIn};
`;
