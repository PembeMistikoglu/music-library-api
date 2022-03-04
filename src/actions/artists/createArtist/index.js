const insertArtist = require("./queries/insertArtist");

const createArtist = async ({ artistName, artistGenre }) => {
  const artistId = await insertArtist({ artistName, artistGenre });
  return { artistId };
};

module.exports = createArtist;
