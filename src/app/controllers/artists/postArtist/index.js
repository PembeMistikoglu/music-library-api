const handleAPIError = require("~root/utils/handleAPIError");
const createArtist = require("~root/actions/artists/createArtist");

const postArtist = async (req, res) => {
  const { artistName, artistGenre } = req.body;

  try {
    const { artistId } = await createArtist({ artistName, artistGenre });

    res.status(201).send({
      artistId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postArtist;
