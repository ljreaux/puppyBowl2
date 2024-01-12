import Buttons from "./Buttons";

export default function PlayerList({ players }) {
  return (
    <>
      {players.length > 0 ? (
        <div className="grid grid-cols-3">
          {players.map((player) => (
            <div
              className="flex flex-col items-center justify-center text-center m-3 bg-sky-400 rounded-3xl"
              key={player.id}
            >
              <p className="text-2xl py-2">{player.name}</p>
              <img
                src={player.imageUrl}
                alt={`Image of player ${player.id}`}
                className="max-w-[90%] rounded-3xl"
              />
              <Buttons
                playerNav={player.id}
                buttonText={"See Details"}
                player={player}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No Dogs Found</p>
      )}
    </>
  );
}
