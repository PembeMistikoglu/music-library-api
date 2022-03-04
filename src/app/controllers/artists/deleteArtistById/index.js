const handleAPIError = require("~root/utils/handleAPIError");
const removeArtist = require("~root/actions/artists/removeArtist");

const deleteArtistById = async (req, res) => {
  const { artistId } = req.params;

  try {
    const { deletedArtist } = await removeArtist({
      artistId
    });

    res.status(201).send({
      deletedArtist
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteArtistById;
