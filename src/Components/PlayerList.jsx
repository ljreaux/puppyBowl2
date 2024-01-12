import Buttons from "./Buttons";

export default function PlayerList({ players }) {
  return (
    <>
      {players.length > 0 ? (
        players.map((player) => (
          <div
            className="flex flex-col justify-center items-center text-center"
            key={player.id}
          >
            <p>{player.name}</p>
            <img src={player.imageUrl} alt={`Image of player ${player.id}`} />
            <Buttons
              playerNav={player.id}
              buttonText={"See Details"}
              player={player}
            />
          </div>
        ))
      ) : (
        <p>No Dogs Found</p>
      )}
    </>
  );
}
