import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-height: 100%;
  max-width: 1296px;

  .containerImage {
    width: 100%;
  }

  .containerImage img {
    width: 100%;
    height: 350px;
    object-fit: scale-down; 
  }
  .containerTitle {
    width: 100%;

    display: flex;
    justify-content: flex-start;
  }
  h1 {
    color: white;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  h2 {
    margin-left: 10px;
    color: var(--color-gray-300);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .container {
    width: 100%;

    display: flex;
    align-items: flex-start;
    flex-direction: column;

    gap: 20px;
  }
  p {
    color: var(--color-gray-300);
    margin-left: 10px;
  }
`;
