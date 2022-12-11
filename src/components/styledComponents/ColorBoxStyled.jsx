import styled from 'styled-components';
import BoxScaleStyled from './BoxScaleStyled';

export default styled(BoxScaleStyled)`
  background-color: rgba(
    ${(props) => props.red},
    ${(props) => props.green},
    ${(props) => props.blue},
    ${(props) => props.opacity / 100}
  );
  backdrop-filter: blur(${(props) => props.blur}px);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.3);
`;
