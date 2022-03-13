const { submitQuery, getInsertId } = require("~root/lib/database");

const updateArtistNameById = ({ artistId, name }) => submitQuery`
    UPDATE Artists
    SET name=${name}
    WHERE artist_id=${artistId}
`;

module.exports = getInsertId(updateArtistNameById);
