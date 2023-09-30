import styled from "styled-components";

export const Container = styled.div`
  main {
    display: flex;
    justify-content: center;

    max-height: 100vh;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    max-width: 1296px;
    max-height: 100%;

    overflow-y: auto;
  }

  /* @media (min-width: 768px) {
    grid-template-columns: repeat(3, 2fr);
  } */
`;
