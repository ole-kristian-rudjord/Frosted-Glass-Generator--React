import styled from 'styled-components';

export default styled.div`
  grid-row: 2/3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: ${(props) => props.theme.spacing};
`;
