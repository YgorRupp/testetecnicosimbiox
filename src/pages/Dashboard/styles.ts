import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  main {
    display: flex;
    flex-direction: row;
    justify-content: center;

    max-height: calc(100vh - 110px);
  }

  .searchResults p {
    color: white;
  }
  .searchResults link {
    color: white;
  }
  ul {
    display: flex;
    /* grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px; */
    gap: 20px;

    margin: 100px 0;

    max-width: 1296px;
    max-height: 100vh;

    overflow-x: scroll;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  ul img {
    width: 300px;
    height: 350px;
  }
  ul::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }
  ul::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  ul p {
    color: white;
    overflow: hidden;
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

  .paginationButton p {
    color: white;
  }
`;
