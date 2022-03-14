const selectAllSongs = require("./queries/selectAllSongs");

const fetchAllSongs = async () => {
  const songs = await selectAllSongs();

  return { songs };
};

module.exports = fetchAllSongs;
