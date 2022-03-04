const deleteArtistQuery = require("./queries/deleteArtistQuery");

const removeArtist = async ({ artistId }) => {
  const deletedArtist = await deleteArtistQuery({
    artistId
  });
  return { deletedArtist };
};

module.exports = removeArtist;
