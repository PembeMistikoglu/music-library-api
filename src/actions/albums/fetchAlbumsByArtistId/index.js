const selectAlbumsByArtistId = require("./queries/selectAlbumsByArtistId");

const fetchAlbumsByArtistId = async ({ artistId }) => {
  const album = await selectAlbumsByArtistId({
    artistId
  });

  return { album };
};

module.exports = fetchAlbumsByArtistId;
