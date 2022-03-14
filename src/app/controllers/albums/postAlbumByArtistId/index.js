const handleAPIError = require("~root/utils/handleAPIError");
const createAlbum = require("~root/actions/albums/createAlbum");

const postAlbumByArtistId = async (req, res) => {
  const { artistId } = req.params;
  const { name, year } = req.body;

  try {
    const { albumId } = await createAlbum({
      artistId,
      name,
      year
    });

    res.status(201).send({
      albumId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postAlbumByArtistId;
