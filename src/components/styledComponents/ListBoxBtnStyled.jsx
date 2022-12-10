import styled from 'styled-components';

export default styled.button`
  height: 100%;
  width: 100%;
  grid-area: ${(props) =>
    props.duplicate ? 'duplicate' : props.remove ? 'remove' : 'edit'};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  color: #ffffffb2;
  background-color: transparent;

  &:hover {
    color: white;
    background-color: ${(props) =>
      props.duplicate ? '#ffff0049' : props.remove ? '#ff00002b' : '#90ee9032'};
  }
`;
