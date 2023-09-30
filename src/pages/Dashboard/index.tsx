import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
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
                  return <Card key={movie.id} movie={movie} />;
                })
              : null}
          </ul>
        </main>
        <Footer />
      </Container>
    </>
  );
};
