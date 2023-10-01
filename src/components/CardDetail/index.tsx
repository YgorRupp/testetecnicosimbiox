import { MovieDetails } from "../../pages/DetailMovie";
import { ContainerCard } from "./styles";

interface CardDetailProps {
  movie: MovieDetails;
}
export const CardDetail = ({ movie }: CardDetailProps) => {
  console.log(movie.title);
  return (
    <ContainerCard>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="Logo TMDb"
      ></img>
    </ContainerCard>
  );
};
