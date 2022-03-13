const modifyArtistGenreById = require("~root/actions/artists/modifyArtistHGenreById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchArtistGenreById = async (req, res) => {
  const { artistId } = req.params;
  const { genre } = req.body;

  try {
    const { artist } = await modifyArtistGenreById({
      artistId,
      genre
    });

    res.status(201).send({
      artist
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchArtistGenreById;
