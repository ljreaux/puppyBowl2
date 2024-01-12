import { useEffect, useState } from "react";
import { fetchAllPlayers } from "./API/api";
import PlayerList from "./Components/PlayerList";
import SinglePlayer from "./Components/SinglePlayer";
import AddPlayer from "./Components/AddPlayer";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./Components/SearchBar";

function App() {
  const [players, setPlayers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const init = async () => {
      const playersList = await fetchAllPlayers();
      setPlayers(playersList);
      console.log(playersList);
    };
    init();
  }, []);
  return (
    <>
      <AddPlayer />
      <SearchBar players={players} setSearchResults={setSearchResults} />
      <Routes>
        <Route path="/" element={<PlayerList players={players} />} />
        <Route path="/:playerId" element={<SinglePlayer />} />
        <Route
          path="/search/:searchTerm"
          element={<PlayerList players={searchResults} />}
        />
      </Routes>
    </>
  );
}

export default App;
