import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePlayer } from "../API/api";
import Buttons from "./Buttons";
export default function SinglePlayer() {
  const [player, setPlayer] = useState([{}]);
  const navigate = useNavigate();
  const { playerId } = useParams();
  useEffect(() => {
    async function player() {
      const singlePlayer = await fetchSinglePlayer(playerId);
      setPlayer([singlePlayer]);
    }
    player();
  }, [playerId]);
  return (
    <>
      {player.map((player) => (
        <div
          className="flex flex-col justify-center items-center text-center"
          key={player.id}
        >
          <p>{player.name}</p>
          <img src={player.imageUrl} alt={`Image of player ${player.id}`} />
          <Buttons
            playerNav=""
            buttonText={"See All Players"}
            player={player}
          />
          <p>{`Breed: ${player.breed}`}</p>
          <p>{`Status: ${player.status}`}</p>
        </div>
      ))}
    </>
  );
}
