const insertAlbumByArtistId = require("./queries/insertAlbumByArtistId");

const createAlbum = async ({ artistId, albumName, albumYear }) => {
  const album = await insertAlbumByArtistId({
    artistId,
    albumName,
    albumYear
  });

  return { album };
};

module.exports = createAlbum;
