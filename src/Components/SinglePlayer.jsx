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
    <div className="flex justify-center py-12">
      {player.map((player) => (
        <div
          className="flex flex-col w-fit items-center justify-center text-center m-3 bg-sky-400 rounded-3xl"
          key={player.id}
        >
          <p className="text-2xl py-2">{player.name}</p>
          <img
            src={player.imageUrl}
            alt={`Image of player ${player.id}`}
            className="max-w-[90%] rounded-3xl"
          />
          <Buttons
            playerNav=""
            buttonText={"See All Players"}
            player={player}
          />
          <p>{`Breed: ${player.breed}`}</p>
          <p>{`Status: ${player.status}`}</p>
        </div>
      ))}
    </div>
  );
}
