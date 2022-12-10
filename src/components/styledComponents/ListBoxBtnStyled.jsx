import styled from 'styled-components';

export default styled.button`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  grid-area: ${(props) =>
    props.duplicate ? 'duplicate' : props.remove ? 'remove' : 'edit'};

  &:hover {
    background-color: ${(props) =>
      props.duplicate ? '#ffff0049' : props.remove ? '#ff00002b' : '#90ee9032'};
  }
`;
