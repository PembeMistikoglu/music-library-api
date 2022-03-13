const updateArtistNameById = require("./queries/updateArtistNameById");

const modifyArtistNameById = async ({ artistId, name }) => {
  const artist = await updateArtistNameById({
    artistId,
    name
  });

  return { artist };
};

module.exports = modifyArtistNameById;
