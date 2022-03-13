const selectSongByArtistId = require("./queries/selectSongByArtistId");

const fetchSongByArtistId = async ({ artistId }) => {
  const song = await selectSongByArtistId({
    artistId
  });

  return { song };
};

module.exports = fetchSongByArtistId;
