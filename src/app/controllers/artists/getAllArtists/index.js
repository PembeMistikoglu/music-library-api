const fetchAllArtists = require("~root/actions/artists/fetchAllArtists");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllArtists = async (req, res) => {
  try {
    const { artists } = await fetchAllArtists();
    res.status(201).send({
      artists
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllArtists;
