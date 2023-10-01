import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardDetail } from "../../components/CardDetail";

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: number[];
  homepage: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const DetailMovie = () => {
  const { id } = useParams<{ id?: string }>();

  const idNumber = id ? parseInt(id, 10) : 0;

  const [cardDetails, setCardDetails] = useState<MovieDetails | null>(null);

  useEffect(() => {
    async function responseData() {
      try {
        const response = await api.get(`/teste/${idNumber}`);
        setCardDetails(response.data);
        console.log(response.data);
        console.log(response.data.title);
      } catch (err) {
        console.log(err);
      }
    }
    responseData();
  }, [idNumber]);

  console.log(cardDetails);
  return (
    <Container>
      <Header />
      <div>
        {cardDetails ? <CardDetail key={1} movie={cardDetails} /> : null}
      </div>
      <Footer />
    </Container>
  );
};
