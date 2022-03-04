const selectSongByAlbumId = require("./queries/selectSongByAlbumId");

const fetchSongByAlbumId = async ({ albumId }) => {
  const song = await selectSongByAlbumId({
    albumId
  });

  return { song };
};

module.exports = fetchSongByAlbumId;
