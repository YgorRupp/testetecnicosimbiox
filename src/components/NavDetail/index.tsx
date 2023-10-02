import { useNavigate } from "react-router-dom";
import { ContainerNav } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const NavDetail = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <ContainerNav>
      <p onClick={handleClick}>SimbioMovies</p>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faHouse} />
      </button>
    </ContainerNav>
  );
};
