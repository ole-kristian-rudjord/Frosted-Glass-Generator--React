import styled from 'styled-components';

export default styled.div`
  grid-row: 2/3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: ${(props) => props.theme.spacing};

  @media only screen and (max-width: 830px) {
    display: grid;
    grid-template-areas:
      'themeButton codeButton'
      'sliders sliders';
    padding: 0;

    & > div {
      border-radius: 0;
    }

    & > div:nth-child(1) {
      grid-area: themeButton;
      justify-self: start;
    }

    & > div:nth-child(3) {
      grid-area: codeButton;
      justify-self: end;
    }

    & > div:nth-child(1),
    & > div:nth-child(3) {
      height: 50px;
      margin: 10px;

      & > div {
        height: 80px;
      }
    }

    & > div:nth-child(2) {
      grid-area: sliders;
      display: grid;
      grid-template-columns: repeat(1fr, 6);
      grid-template-rows: repeat(1fr, 2);
      height: 200px;
      width: 100%;
      justify-content: space-between;
      gap: 10px;
      padding-bottom: 28px;

      & > div {
        width: 100%;
      }

      & > div:nth-child(1) {
        grid-column: 1/3;
        grid-row: 1/2;
      }
      & > div:nth-child(2) {
        grid-column: 3/5;
        grid-row: 1/2;
      }
      & > div:nth-child(3) {
        grid-column: 5/7;
        grid-row: 1/2;
      }
      & > div:nth-child(4) {
        grid-column: 1/4;
        grid-row: 2/3;
      }
      & > div:nth-child(5) {
        grid-column: 4/7;
        grid-row: 2/3;
      }
    }
  }
`;
