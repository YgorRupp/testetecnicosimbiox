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
  const [value, setValue] = useState("");
  const [searchMovie, setSearchMovie] = useState<Movie>();
  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setValue(value);

    if (!value) {
      return;
    }

    console.log(e.target.value);
  };

  console.log(value);

  useEffect(() => {
    async function responseData() {
      try {
        const response = await api.get(`/teste?${value}`);
        setSearchMovie(response.data.results);
        console.log(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    responseData();
  }, []);

  useEffect(() => {
    async function responseData() {
      try {
        const response = await api.get(`/teste/${currentPage}`);
        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    responseData();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  console.log(searchMovie);

  return (
    <>
      <Container>
        <Header handleInputChange={handleInputChange} />
        <div className="paginationButton">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <button onClick={() => handlePageChange(currentPage + 1)}>
            Proximo
          </button>
        </div>
        <main>
          <ul>
            {Array.isArray(movies)
              ? movies.map((movie) => {
                  return (
                    <Card
                      key={movie.id}
                      movie={movie}
                      searchMovie={searchMovie}
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
