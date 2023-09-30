import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { Header } from "../../components/Header";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: [];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const Dashboard = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function responseData() {
      try {
        const response = await api.get("/teste");
        setMovies(response.data.results);
        console.log(response.data.results);
        console.log(
          movies.map((movie) => {
            return <h2>{movie.id}</h2>;
          })
        );
        console.log();
      } catch (err) {
        console.log(err);
      }
    }
    responseData();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <main>
          <ul>
            {Array.isArray(movies)
              ? movies.map((movie) => {
                  return <li key={movie.id}>{movie.poster_path}</li>;
                })
              : null}
          </ul>
        </main>
      </Container>
    </>
  );
};
