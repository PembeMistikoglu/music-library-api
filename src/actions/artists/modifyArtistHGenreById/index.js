const updateArtistGenreById = require("./queries/updateArtistGenreById");

const modifyArtistGenreById = async ({ artistId, artistGenre }) => {
  const artist = await updateArtistGenreById({
    artistId,
    artistGenre
  });

  return { artist };
};

module.exports = modifyArtistGenreById;
