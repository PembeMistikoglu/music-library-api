const selectAllArtists = require("./queries/selectAllArtists");

const fetchAllArtists = async () => {
  const artists = await selectAllArtists();

  return { artists };
};

module.exports = fetchAllArtists;
