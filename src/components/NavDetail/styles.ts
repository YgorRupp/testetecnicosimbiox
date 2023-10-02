import styled from "styled-components";

export const ContainerNav = styled.nav`
  max-width: 1296px;
  height: 70px;
  margin-inline: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: red;
    font-size: 1rem;
    font-weight: 600;
  }

  button {
    background: none;
    border: none;
    color: red;
    font-size: 24px;
  }

  @media (min-width: 768px) {
    p {
      color: red;
      font-size: 2rem;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
