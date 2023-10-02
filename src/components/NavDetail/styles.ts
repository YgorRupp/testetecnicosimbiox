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
  div input {
    height: 25px;
    border-radius: 4px;
    border: none;
  }

  div input::placeholder {
    padding-left: 5px;
    color: var(--color-black);
  }

  div {
    display: flex;
    gap: 32px;
  }

  div span {
    font-size: 18px;
    color: #ffffff;
    padding-block: 16px;
  }

  @media (min-width: 768px) {
    p {
      color: red;
      font-size: 2rem;
      font-weight: 600;
    }
    div input {
      height: 30px;
      border-radius: 4px;
      border: none;
    }
  }
`;
