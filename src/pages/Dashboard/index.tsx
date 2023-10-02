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
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function responseData() {
      try {
        const response = await api.get(`/movies/${currentPage}`);
        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    responseData();
  }, [currentPage]);

  const nextPage = () => {
    if (offset < 15) {
      setOffset(offset + 5);
    } else {
      setOffset(0);
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (offset > 0) {
      setOffset(offset - 5);
    } else {
      setOffset(15);
      setCurrentPage(currentPage - 1);
    }
  };

  const currentPageCount = () => {
    if (currentPage === 1) {
      return 1 + offset / 5;
    } else {
      return 1 + (currentPage - 1) * 4 + offset / 5;
    }
  };

  return (
    <>
      <Container>
        <Header />
        <div className="paginationButton">
          <button
            onClick={() => previousPage()}
            disabled={currentPage === 1 && offset === 0}
          >
            Anterior
          </button>
          <p>{currentPageCount()}</p>
          <button onClick={() => nextPage()}>Proximo</button>
        </div>
        <main>
          <ul>
            {Array.isArray(movies)
              ? movies.slice(offset, offset + 5).map((movie) => {
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
