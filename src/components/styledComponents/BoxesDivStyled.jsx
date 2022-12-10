import styled from 'styled-components';

export default styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.spacing};
  padding: 0 ${(props) => props.spacing};
  overflow-x: auto;
  overflow-y: hidden;
`;
