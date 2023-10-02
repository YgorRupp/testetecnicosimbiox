import { Nav } from "../Nav";
import { ContainerHeader } from "./styles";

interface HeaderProps {
  onSearch: (text: string) => Promise<void>;
}

export const Header = ({ onSearch }: HeaderProps) => {
  return (
    <ContainerHeader>
      <Nav onSearch={onSearch}/>
    </ContainerHeader>
  );
};
