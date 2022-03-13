const deleteSongQuery = require("./queries/deleteSongQuery");

const removeSong = async ({ songId }) => {
  const deletedSong = await deleteSongQuery({
    songId
  });
  return { deletedSong };
};

module.exports = removeSong;
