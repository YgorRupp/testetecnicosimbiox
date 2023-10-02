import { Movie } from "../../pages/Dashboard";
import { ContainerLi } from "./styles";
import { useNavigate } from "react-router-dom";

interface CardProps {
  movie: Movie;
  searchResults: Movie[];
  index: number;
}

export const Card = ({ movie, searchResults, index }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/card/${movie.id}`);
  };
  console.log(searchResults);
  return (
    <ContainerLi onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/original${
          searchResults.length && searchResults[index].poster_path
            ? searchResults[index].poster_path
            : movie.poster_path
        }`}
        alt="Logo TMDb"
      ></img>
      <div className="cardContent">
        <p>
          {searchResults.length && searchResults[index].title
            ? searchResults[index].title
            : movie.title}
        </p>
        <span>
          {searchResults.length && searchResults[index].overview
            ? searchResults[index].overview
            : movie.overview}
        </span>
        <div className="containerVote">
          <p>Nota dos usuario</p>
          <div className="containerCircle">
            <h5>
              {searchResults.length && searchResults[index].vote_average
                ? searchResults[index].vote_average
                : movie.vote_average}
            </h5>
          </div>
        </div>
      </div>
    </ContainerLi>
  );
};
