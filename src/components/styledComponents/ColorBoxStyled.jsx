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
  box-shadow: ${(props) => props.theme.shadowOut},
    ${(props) => props.theme.shadowIn};
`;
