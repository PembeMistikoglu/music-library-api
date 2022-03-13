const updateArtistGenreById = require("./queries/updateArtistGenreById");

const modifyArtistGenreById = async ({ artistId, genre }) => {
  const artist = await updateArtistGenreById({
    artistId,
    genre
  });

  return { artist };
};

module.exports = modifyArtistGenreById;
