const handleAPIError = require("~root/utils/handleAPIError");
const createArtist = require("~root/actions/artists/createArtist");

const postArtist = async (req, res) => {
  const { name, genre } = req.body;

  try {
    const { artistId } = await createArtist({ name, genre });

    res.status(201).send({
      artistId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postArtist;
