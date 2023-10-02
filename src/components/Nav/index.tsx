import SearchBar from "../SearchBar";
import { ContainerNav } from "./styles";

interface NavProps {
  onSearch: (text: string) => Promise<void>;
}

export const Nav = ({ onSearch }: NavProps) => {
  return (
    <ContainerNav>
      <p>SimbioMovies</p>
      <SearchBar onSearch={onSearch} />
    </ContainerNav>
  );
};
