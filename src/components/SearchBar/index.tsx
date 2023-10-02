import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ContainerSearchBar } from "./styles";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?s=${searchText}`);
  };

  return (
    <ContainerSearchBar>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite sua pesquisa..."
            value={searchText}
            onChange={handleInputChange}
          />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </ContainerSearchBar>
  );
};

export default SearchBar;
