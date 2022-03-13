const handleAPIError = require("~root/utils/handleAPIError");
const removeSong = require("~root/actions/songs/removeSong");

const deleteSongById = async (req, res) => {
  const { songId } = req.params;

  try {
    const { deletedSong } = await removeSong({
      songId
    });

    res.status(204).send({
      deletedSong
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteSongById;
