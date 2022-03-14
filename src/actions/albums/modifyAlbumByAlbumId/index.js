const updateAlbumByAlbumId = require("./queries/updateAlbumByAlbumId");

const modifyAlbumByAlbumId = async ({ albumId, name, year }) => {
  const album = await updateAlbumByAlbumId({
    albumId,
    name,
    year
  });

  return { album };
};

module.exports = modifyAlbumByAlbumId;
