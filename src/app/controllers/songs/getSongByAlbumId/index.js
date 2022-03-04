const fetchSongByAlbumId = require("~root/actions/songs/fetchSongByAlbumId");
const handleAPIError = require("~root/utils/handleAPIError");

const getSongByAlbumId = async (req, res) => {
  const { albumId } = req.params;
  try {
    const { song } = await fetchSongByAlbumId({
      albumId
    });

    res.status(201).send({
      song
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getSongByAlbumId;
