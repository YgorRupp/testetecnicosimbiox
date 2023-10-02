import { Movie } from "../../pages/Dashboard";
import { ContainerLi } from "./styles";
import { useNavigate } from "react-router-dom";

interface CardProps {
  movie: Movie;
  searchMovie?: Movie;
}
export const Card = ({ movie, searchMovie }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/card/${movie.id}`);
  };

  console.log(searchMovie);

  return (
    <ContainerLi onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/original${
          searchMovie && searchMovie.poster_path
            ? searchMovie.poster_path
            : movie.poster_path
        }`}
        alt="Logo TMDb"
      ></img>
      <div className="cardContent">
        <h1>
          {searchMovie && searchMovie.title ? searchMovie.title : movie.title}
        </h1>
        <h1>
          {searchMovie && searchMovie.title ? searchMovie.title : movie.title}
        </h1>
        <h1>
          {searchMovie && searchMovie.title ? searchMovie.title : movie.title}
        </h1>
      </div>
    </ContainerLi>
  );
};
