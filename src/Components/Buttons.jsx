import { useNavigate } from "react-router-dom";
import { removePlayer } from "../API/api";

export default function Buttons({ playerNav, buttonText, player }) {
  const navigate = useNavigate();
  return (
    <div className="py-4">
      <button
        className="btn"
        type={"button"}
        onClick={() => {
          navigate(`/${playerNav}`);
        }}
      >
        {buttonText}
      </button>
      <button
        className="btn"
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
