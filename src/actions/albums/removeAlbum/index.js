const deleteAlbumQuery = require("./queries/deleteAlbumQuery");

const removeAlbum = async ({ albumId }) => {
  const deletedAlbum = await deleteAlbumQuery({
    albumId
  });
  return { deletedAlbum };
};

module.exports = removeAlbum;
