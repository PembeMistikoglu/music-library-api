const { submitQuery } = require("~root/lib/database");

const deleteArtistById = ({ artistId }) => submitQuery`
    DELETE FROM
        Artists
    WHERE
        artist_id=${artistId}
`;

module.exports = deleteArtistById;
