import { MovieDetails } from "../../pages/DetailMovie";
import { ContainerCard } from "./styles";

interface CardDetailProps {
  movie: MovieDetails;
}
export const CardDetail = ({ movie }: CardDetailProps) => {
  return (
    <ContainerCard>
      <div className="containerImage">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="Logo TMDb"
        ></img>
      </div>
      <div className="containerTitle">
        <h1>{movie.title}</h1>
      </div>
      <h2>{movie.overview}</h2>
      <div className="container">
        <p>Avaliação dos usuários: {movie.vote_average.toFixed(1)}</p>
        <p>Data de lançamento: {movie.release_date}</p>
        <p className="runtime">Duração: {movie.runtime} minutos</p>
      </div>
    </ContainerCard>
  );
};
