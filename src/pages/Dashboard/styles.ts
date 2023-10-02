import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  main {
    display: flex;
    flex-direction: row;
    justify-content: center;

    max-height: calc(100vh - 110px);

    overflow-y: auto;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    margin: 100px 0;

    max-width: 1296px;
    max-height: 100vh;

    overflow-x: auto;
  }

  .paginationButton {
    margin-top: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    height: 20px;
  }

  .paginationButton button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #999;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .paginationButton button:hover {
    background-color: #ccc;
  }
`;
