import { useNavigate } from "react-router-dom";
import { ContainerNav } from "./styles";

export const NavDetail = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <ContainerNav>
      <p onClick={handleClick}>SimbioMovies</p>
      <div>
        <div></div>
      </div>
      <div></div>
    </ContainerNav>
  );
};
