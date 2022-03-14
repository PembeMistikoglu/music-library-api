const updateArtistById = require("./queries/updateArtistById");

const modifyArtistById = async ({ artistId, genre, name }) => {
  const artist = await updateArtistById({
    artistId,
    genre,
    name
  });

  return { artist };
};

module.exports = modifyArtistById;
