const fetchAlbumsByArtistId = require("~root/actions/albums/fetchAlbumsByArtistId");
const handleAPIError = require("~root/utils/handleAPIError");

const getAlbumsByArtistId = async (req, res) => {
  const { artistId } = req.params;
  try {
    const { album } = await fetchAlbumsByArtistId({
      artistId
    });

    res.status(201).send({
      album
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAlbumsByArtistId;
