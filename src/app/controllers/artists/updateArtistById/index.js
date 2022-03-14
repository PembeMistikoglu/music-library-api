const modifyArtistById = require("~root/actions/artists/modifyArtistById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchArtistById = async (req, res) => {
  const { artistId } = req.params;
  const { genre, name } = req.body;

  try {
    const { artist } = await modifyArtistById({
      artistId,
      genre,
      name
    });

    res.status(201).send({
      artist
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchArtistById;
