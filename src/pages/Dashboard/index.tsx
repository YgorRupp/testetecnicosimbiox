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
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [offset, setOffset] = useState(0);
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmYzZjIxMWZlODBiOTBhNDEyY2I1NzA0ZjJiOWRjMSIsInN1YiI6IjY1MTk0MjEwOTY3Y2M3MzQyNDY3MjFjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hKSLdSG3y8cC7WAC6aJWxsqW_XrW5S91z-3XNHEokhg";

  useEffect(() => {
    async function responseData() {
      try {
        const response = await api.get(`/movies/${currentPage}`);
        // const movies = response.data
        // movies.length += 5
        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    responseData();
  }, [currentPage]);

  // const handlePageChange = (newPage: number) => {
  //   setCurrentPage(newPage);
  // };

  const searchMovies = async (text: string) => {
    try {
      const response = await api.get(
        `https://api.themoviedb.org/3/search/movie?query=${text}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

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

  console.log(searchResults);

  return (
    <>
      <Container>
        <Header onSearch={searchMovies} />
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
              ? movies.slice(offset, offset + 5).map((movie, index) => {
                  return (
                    <Card
                      key={movie.id}
                      movie={movie}
                      searchResults={searchResults}
                      index={index}
                    />
                  );
                })
              : null}
          </ul>
        </main>
        <Footer />
      </Container>
    </>
  );
};
