const insertArtist = require("./queries/insertArtist");

const createArtist = async ({ name, genre }) => {
  const artistId = await insertArtist({ name, genre });
  return { artistId };
};

module.exports = createArtist;
