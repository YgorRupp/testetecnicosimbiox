import { Movie } from "../../pages/Dashboard";
import { ContainerLi } from "./styles";
import { useNavigate } from "react-router-dom";

interface CardProps {
  movie: Movie;
}
export const Card = ({ movie }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/card/${movie.id}`);
    console.log("clicado");
  };

  return (
    <ContainerLi onClick={handleClick}>
      {/* {`https://cineserieshub-back-production.up.railway.app`} */}
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="Logo TMDb"
      ></img>
    </ContainerLi>
  );
};
