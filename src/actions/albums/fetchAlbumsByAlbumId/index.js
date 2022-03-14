const selectAlbumByAlbumId = require("./queries/selectAlbumByAlbumId");

const fetchAlbumByAlbumId = async ({ albumId }) => {
  const album = await selectAlbumByAlbumId({
    albumId
  });

  return { album };
};

module.exports = fetchAlbumByAlbumId;
