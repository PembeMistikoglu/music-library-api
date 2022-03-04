const selectArtistById = require("./queries/selectArtistById");

const fetchArtistById = async ({ artistId }) => {
  const artist = await selectArtistById({
    artistId
  });

  return { artist };
};

module.exports = fetchArtistById;
