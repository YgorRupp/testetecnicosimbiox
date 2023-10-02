import { ContainerNav } from "./styles";

interface navProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Nav = ({ handleInputChange }: navProps) => {
  return (
    <ContainerNav>
      <p>SimbioMovies</p>
      <div>
        <div></div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Busque pelo seu filme"
          onChange={handleInputChange}
        />
      </div>
    </ContainerNav>
  );
};
