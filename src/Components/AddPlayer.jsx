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
      className="text-center"
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
      <h1 className="text-4xl py-4">Add New Player to Roster</h1>
      <label className="" htmlFor="name">
        Name:
      </label>
      <input
        id="name"
        className="input"
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

      <label className="" htmlFor="breed">
        Breed:
      </label>
      <input
        id="breed"
        className="input"
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

      <label className="" htmlFor="imageUrl">
        Image Url:
      </label>
      <input
        id="imageUrl"
        className="input"
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

      <label className="" htmlFor="status">
        Status:
      </label>
      <select
        className="btn my-2"
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
      <br />
      <button className="btn my-2" type="submit">
        Submit
      </button>
    </form>
  );
}
