const modifyArtistNameById = require("~root/actions/artists/modifyArtistNameById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchArtistNameById = async (req, res) => {
  const { artistId } = req.params;
  const { name } = req.body;

  try {
    const { artist } = await modifyArtistNameById({
      artistId,
      name
    });

    res.status(201).send({
      artist
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchArtistNameById;
