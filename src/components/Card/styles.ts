import styled from "styled-components";

export const ContainerLi = styled.li`
  /* width: 300px;
  height: 300px;
  background-color: var(--color-gray-100);
  color: var(--color-black);

  margin: 10px;

  list-style: none;

  cursor: pointer; */

  display: flex;
  gap: 10px;

  position: relative;

  height: auto;
  width: 250px;
  border: 1px solid #ddd;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  transition: transform 0.3s ease-in-out;

  list-style: none;
  :hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
  }

  div {
    position: absolute;
    /* top: 0;
    left: 0; */

    padding: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    height: 100%;
  }

  :hover .classContent {
    opacity: 1;
  }
`;
