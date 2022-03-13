const { submitQuery, getInsertId } = require("~root/lib/database");

const updateArtistGenreById = ({ artistId, genre }) => submitQuery`
    UPDATE Artists
    SET genre=${genre}
    WHERE artist_id=${artistId}
`;

module.exports = getInsertId(updateArtistGenreById);
