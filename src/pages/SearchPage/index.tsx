import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Movie } from "../Dashboard";
import { api } from "../../services/api";
import { Link, useSearchParams } from "react-router-dom";

interface iSearchParams {
  s?: string;
}

export const SearchPage = () => {
  const [moviesSearch, setMoviesSearch] = useState<Movie[]>([]);
  const [searchParams] = useSearchParams();

  const params: iSearchParams = {};

  for (const [key, value] of searchParams.entries()) {
    if (key === "s") {
      params.s = value as string;
    }
  }

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await api.get(
          `https://api.themoviedb.org/3/search/movie?query=${params.s}`
        );
        setMoviesSearch(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };
    searchMovies();
  }, [params.s]);

  return (
    <Container>
      <Header />
      <div className="searchResults">
        <p>Resultados de busca para: {params.s}</p>
        <Link to="/">Limpar busca</Link>
      </div>
      <main>
        <ul>
          {moviesSearch.length > 0 ? (
            moviesSearch.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })
          ) : (
            <div className="containerNotFound">
              <p className="searchNotFound">Nenhum resultado encontrado</p>
            </div>
          )}
        </ul>
      </main>
      <Footer />
    </Container>
  );
};
