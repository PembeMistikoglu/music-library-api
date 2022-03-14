const fetchSongByArtistId = require("~root/actions/songs/fetchSongByArtistId");
const handleAPIError = require("~root/utils/handleAPIError");

const getSongByArtistId = async (req, res) => {
  const { artistId } = req.params;
  try {
    const { song } = await fetchSongByArtistId({
      artistId
    });

    res.status(201).send({
      song
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getSongByArtistId;
