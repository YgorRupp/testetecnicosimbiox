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
  };

  return (
    <ContainerLi onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="Logo TMDb"
      ></img>
      <div className="cardContent">
        <p>{movie.title}</p>
        <span>{movie.overview}</span>
        <div className="containerVote">
          <p>Nota dos usuario</p>
          <div className="containerCircle">
            <h5>{movie.vote_average}</h5>
          </div>
        </div>
      </div>
    </ContainerLi>
  );
};
