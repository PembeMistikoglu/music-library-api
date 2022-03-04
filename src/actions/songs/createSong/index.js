const insertSongByAlbumId = require("./queries/insertSongByAlbumId");

const createSong = async ({ albumId, songName, artistId }) => {
  const song = await insertSongByAlbumId({
    albumId,
    songName,
    artistId
  });

  return { song };
};

module.exports = createSong;
