const handleAPIError = require("~root/utils/handleAPIError");
const createSong = require("~root/actions/songs/createSong");

const postSong = async (req, res) => {
  const { albumId, artistId } = req.params;
  const { name } = req.body;

  try {
    const { songId } = await createSong({
      albumId,
      name,
      artistId
    });

    res.status(201).send({
      songId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postSong;
