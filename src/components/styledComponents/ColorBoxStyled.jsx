import styled from 'styled-components';

export default styled.div`
  background-color: rgba(
    ${(props) => props.red},
    ${(props) => props.green},
    ${(props) => props.blue},
    ${(props) => props.opacity / 100}
  );
  backdrop-filter: blur(${(props) => props.blur}px);
`;
