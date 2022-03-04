const handleAPIError = require("~root/utils/handleAPIError");
const createAlbum = require("~root/actions/albums/createAlbum");

const postAlbumByArtistId = async (req, res) => {
  const { artistId } = req.params;
  const { albumName, albumYear } = req.body;

  try {
    const { album } = await createAlbum({
      artistId,
      albumName,
      albumYear
    });

    res.status(201).send({
      album
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postAlbumByArtistId;
