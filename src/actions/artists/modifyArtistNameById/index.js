const updateArtistNameById = require("./queries/updateArtistNameById");

const modifyArtistNameById = async ({ artistId, artistName }) => {
  const artist = await updateArtistNameById({
    artistId,
    artistName
  });

  return { artist };
};

module.exports = modifyArtistNameById;
