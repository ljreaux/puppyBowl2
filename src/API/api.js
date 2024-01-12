const cohortName = "2309-FTB-ET-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export async function fetchAllPlayers() {
  try {
    const response = await fetch(APIURL);
    const json = await response.json();
    return json.data.players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
}

export async function fetchSinglePlayer(playerId) {
  try {
    const response = await fetch(`${APIURL}/${playerId}`);
    const json = await response.json();
    const playerDetails = json.data.player;

    return playerDetails;
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
}

export async function addNewPlayer(playerObj) {
  try {
    const response = await fetch(APIURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: playerObj.name,
        breed: playerObj.breed,
        status: playerObj.status,
        imageUrl: playerObj.imageUrl,
      }),
    });
    console.log(response);
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
}

export async function removePlayer(playerId) {
  try {
    const response = await fetch(`${APIURL}/${playerId}`, {
      method: "DELETE",
    });

    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
}
