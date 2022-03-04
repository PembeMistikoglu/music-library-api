const updateAlbumByAlbumId = require("./queries/updateAlbumByAlbumId");

const modifyAlbumByAlbumId = async ({ albumId, albumName, albumYear }) => {
  const album = await updateAlbumByAlbumId({
    albumId,
    albumName,
    albumYear
  });

  return { album };
};

module.exports = modifyAlbumByAlbumId;
