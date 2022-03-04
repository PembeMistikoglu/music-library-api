const handleAPIError = require("~root/utils/handleAPIError");
const removeAlbum = require("~root/actions/albums/removeAlbum");

const deleteAlbumByAlbumId = async (req, res) => {
  const { albumId } = req.params;

  try {
    const { deletedAlbum } = await removeAlbum({
      albumId
    });

    res.status(201).send({
      deletedAlbum
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteAlbumByAlbumId;
