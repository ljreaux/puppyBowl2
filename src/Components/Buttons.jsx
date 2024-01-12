import { useNavigate } from "react-router-dom";
import { removePlayer } from "../API/api";

export default function Buttons({ playerNav, buttonText, player }) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type={"button"}
        onClick={() => {
          navigate(`/${playerNav}`);
        }}
      >
        {buttonText}
      </button>
      <button
        type={"button"}
        onClick={() => {
          removePlayer(player.id);
          navigate("/");
          location.reload();
        }}
      >
        Remove Player
      </button>
    </div>
  );
}
