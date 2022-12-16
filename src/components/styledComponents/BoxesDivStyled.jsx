import styled from 'styled-components';

export default styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.spacing};
  padding: ${(props) => props.theme.spacing} 0;
  overflow-x: auto;
  overflow-y: hidden;

  & > div:first-child {
    margin-left: ${(props) => props.theme.spacing};
  }

  & > div:last-child {
    margin-right: ${(props) => props.theme.spacing};
  }

  &::-webkit-scrollbar {
    height: 8px;
    /* box-shadow: ${(props) => props.theme.shadowOut}; */
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.bg}${(props) => props.theme.backgroundOpacity};
    border-radius: 100px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.fg}${(props) => props.theme.backgroundOpacity};
    border-radius: 100px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.fg};
  }
`;
