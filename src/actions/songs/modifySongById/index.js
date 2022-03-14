const updateSongById = require("./queries/updateSongById");

const modifySongById = async ({ songId, name }) => {
  const song = await updateSongById({
    name,
    songId
  });

  return { song };
};

module.exports = modifySongById;
