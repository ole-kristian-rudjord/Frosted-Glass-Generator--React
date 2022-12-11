import styled from 'styled-components';

export default styled.button`
  /* height: calc(100% - 8px);
  width: calc(100% - 8px); */
  height: 100%;
  width: 100%;
  grid-area: ${(props) =>
    props.duplicate ? 'duplicate' : props.remove ? 'remove' : 'edit'};
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  color: #ffffffb2;
  background-color: transparent;

  &:hover {
    color: white;
    background-color: ${(props) =>
      props.duplicate ? '#ffff0049' : props.remove ? '#ff00002b' : '#90ee9032'};
  }
`;
