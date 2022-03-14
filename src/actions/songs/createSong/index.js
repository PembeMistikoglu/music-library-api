const insertSong = require("./queries/insertSongByAlbumId");

const createSong = async ({ albumId, name, artistId }) => {
  const songId = await insertSong({
    albumId,
    name,
    artistId
  });

  return { songId };
};

module.exports = createSong;
