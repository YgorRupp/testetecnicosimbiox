import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  main {
    display: flex;
    flex-direction: row;
    justify-content: center;

    max-height: calc(100vh - 185px);
  }

  .searchResults {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding-top: 20px;
  }
  .searchResults p {
    color: white;
    font-size: 2rem;
    margin-left: 10px;
  }

  .searchResults a {
    text-decoration: none;
    color: white;
    background-color: #999;

    padding: 10px 20px;
    margin-right: 10px;
  }

  ul {
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    margin: 100px 0;

    max-width: 1296px;
    max-height: 100vh;

    overflow-x: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  ul img {
    width: 300px;
    height: 350px;
  }

  ul p {
    color: white;
    overflow: hidden;
  }

  ul::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }
  ul::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  .containerNotFound {
  }

  .searchNotFound {
    width: 100%;
    color: white;
    overflow: hidden;
  }

  @media (min-width: 1200px) {
    ul {
      overflow-x: auto;
    }
  }
`;
