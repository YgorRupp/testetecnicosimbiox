import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: var(--color-gray-100);

  padding-inline: 16px;

  /* & > nav {
    max-width: 1280px;
    height: 70px;
    margin-inline: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    display: block;
    border: none;
    background: none;
    border-top: 3px solid #ffffff;
    cursor: pointer;
  }

  button::before,
  button::after {
    content: " ";
    display: block;
    width: 30px;
    height: 3px;
    background-color: #ffffff;
    margin-top: 5px;
  }

  div input {
    height: 18px;
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

  @media (max-width: 768px) {
    button {
      display: none;
    }
    div {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: var(--color-gray-100);
      clip-path: circle(100px at 90% - 15%);
      transition: 1s ease-out;

      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 0;
      pointer-events: none;
    }

    /* nav.active div {
      clip-path: circle(1500px at 90% - 15%);
      pointer-events: all;
    } */
`;
