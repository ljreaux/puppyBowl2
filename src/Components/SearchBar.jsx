import { useNavigate } from "react-router-dom";

export default function SearchBar({ players, setSearchResults }) {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const inputValue = e.target[0].value;
        const playerNames = players.filter((player) =>
          player.name.toLowerCase().includes(inputValue.toLowerCase())
        );

        setSearchResults(playerNames);
        navigate(`/search/${e.target.value}`);
      }}
    >
      <label htmlFor="searchBar">
        Search for a puppy
        <input type="text" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
