const handleAPIError = require("~root/utils/handleAPIError");
const createSong = require("~root/actions/songs/createSong");

const postSongByAlbumId = async (req, res) => {
  const { albumId } = req.params;
  const { songName, artistId } = req.body;

  try {
    const { song } = await createSong({
      albumId,
      songName,
      artistId
    });

    res.status(201).send({
      song
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postSongByAlbumId;
