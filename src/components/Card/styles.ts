import styled from "styled-components";

export const ContainerLi = styled.li`
  display: flex;
  gap: 10px;
  cursor: pointer;

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
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.1);
  }

  .cardContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .cardContent:hover {
    opacity: 1;
  }

  .cardContent p {
  }
  .cardContent span {
    height: 110px;
    margin-left: 10px;
    color: var(--color-gray-300);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .containerCircle {
    width: 50px; /* Tamanho do círculo */
    height: 50px;
    background-color: #007bff; /* Cor de fundo do círculo */
    border-radius: 50%; /* Faz com que seja um círculo */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff; /* Cor do texto dentro do círculo */
    font-size: 18px; /* Tamanho da fonte do texto */
  }

  .containerVote {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
