const fetchArtistById = require("~root/actions/artists/fetchArtistById");
const handleAPIError = require("~root/utils/handleAPIError");

const getArtistById = async (req, res) => {
  const { artistId } = req.params;
  try {
    const { artist } = await fetchArtistById({
      artistId
    });

    res.status(201).send({
      artist
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getArtistById;
