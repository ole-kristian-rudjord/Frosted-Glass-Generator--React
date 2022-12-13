import styled from 'styled-components';

export default styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(100%);
  display: ${(props) => (props.isActive ? 'grid' : 'none')};
  grid-template-columns: min-content min-content;
  gap: 20px;
  padding: 20px;
  margin-right: 20px;
  background-color: ${(props) => props.theme.bg}BC;
  backdrop-filter: blur(4px);
  border-radius: 12px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.25),
    inset 0 0 12px rgba(0, 0, 0, 0.75);
  z-index: 10;
`;
