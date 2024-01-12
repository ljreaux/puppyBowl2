import { useState } from "react";
import { addNewPlayer } from "../API/api";
import { useNavigate } from "react-router-dom";

export default function AddPlayer() {
  const [playerObj, setPlayerObj] = useState({
    name: "",
    breed: "",
    status: "bench",
    imgUrl: "",
  });
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        async function postPlayer() {
          const addedPlayer = addNewPlayer(playerObj);
          return addedPlayer;
        }
        postPlayer();
        navigate("/");
        location.reload();
      }}
    >
      <h1>Add New Player to Roster</h1>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          required
          value={playerObj.name}
          onChange={(e) => {
            setPlayerObj({
              ...playerObj,
              name: e.target.value,
            });
          }}
        />
      </label>
      <label htmlFor="breed">
        Breed:
        <input
          type="text"
          required
          value={playerObj.breed}
          onChange={(e) => {
            setPlayerObj({
              ...playerObj,
              breed: e.target.value,
            });
          }}
        />
      </label>
      <label htmlFor="imageUrl">
        Image Url:
        <input
          type="text"
          required
          value={playerObj.imgUrl}
          onChange={(e) => {
            setPlayerObj({
              ...playerObj,
              imgUrl: e.target.value,
            });
          }}
        />
      </label>
      <label htmlFor="status">
        Status:
        <select
          name="status"
          id="status"
          value={playerObj.status}
          onChange={(e) => {
            setPlayerObj({
              ...playerObj,
              status: e.target.value,
            });
          }}
        >
          <option value="bench">bench</option>
          <option value="field">field</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
