import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  justify-content: center;
  width: 100%;
  padding: ${(props) => props.spacing};
  padding-bottom: 0;
`;
