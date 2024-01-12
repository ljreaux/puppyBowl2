import { useNavigate } from "react-router-dom";

export default function SearchBar({ players, setSearchResults }) {
  const navigate = useNavigate();
  return (
    <form
      className="text-center"
      onSubmit={(e) => {
        e.preventDefault();
        const inputValue = e.target[0].value;
        const playerNames = players.filter((player) =>
          player.name.toLowerCase().includes(inputValue.toLowerCase())
        );

        setSearchResults(playerNames);
        navigate(`/search/${inputValue.toLowerCase()}`);
      }}
    >
      <label htmlFor="searchBar">
        Search for a puppy by name
        <input type="text" className="input" />
      </label>
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
}
