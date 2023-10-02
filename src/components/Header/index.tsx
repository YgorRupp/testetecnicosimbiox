import { Nav } from "../Nav";
import { ContainerHeader } from "./styles";

interface HeaderProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header = ({  handleInputChange }: HeaderProps) => {
  return (
    <ContainerHeader>
      <Nav handleInputChange={handleInputChange} />
    </ContainerHeader>
  );
};
