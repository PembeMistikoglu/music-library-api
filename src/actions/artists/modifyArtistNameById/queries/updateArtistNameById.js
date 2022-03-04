const { submitQuery, getInsertId } = require("~root/lib/database");

const updateArtistNameById = ({ artistId, artistName }) => submitQuery`
    UPDATE Artists
    SET artist_name=${artistName}
    WHERE artist_id=${artistId}
`;

module.exports = getInsertId(updateArtistNameById);
