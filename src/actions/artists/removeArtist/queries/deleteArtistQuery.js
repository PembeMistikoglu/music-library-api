const { submitQuery } = require("~root/lib/database");

const deleteArtistQuery = ({ artistId }) => submitQuery`
    DELETE FROM
        Artists
    WHERE
        artist_id=${artistId}
`;

module.exports = deleteArtistQuery;
