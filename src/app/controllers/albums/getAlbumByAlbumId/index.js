const fetchAlbumByAlbumId = require("~root/actions/albums/fetchAlbumsByAlbumId");
const handleAPIError = require("~root/utils/handleAPIError");

const getAlbumByArtistId = async (req, res) => {
  const { albumId } = req.params;
  try {
    const { album } = await fetchAlbumByAlbumId({
      albumId
    });

    res.status(201).send({
      album
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAlbumByArtistId;
