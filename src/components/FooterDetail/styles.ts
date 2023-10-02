import styled from "styled-components";

export const ContainerFooterDetail = styled.footer`
  background-color: var(--color-gray-100);

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;

  div {
    max-width: 1296px;
    height: fit-content;
    margin-inline: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 16px;

    overflow: hidden;
  }

  div p {
    color: red;
    font-size: 1rem;
    font-weight: 600;
  }

  div span {
    color: var(--color-white);
    font-weight: 500;
    font-size: 1rem;
    margin-right: 20px;
  }

  @media (min-width: 768px) {
    div p {
      color: red;
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;
