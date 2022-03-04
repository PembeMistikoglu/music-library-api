const { submitQuery, getInsertId } = require("~root/lib/database");

const updateArtistGenreById = ({ artistId, artistGenre }) => submitQuery`
    UPDATE Artists
    SET artist_genre=${artistGenre}
    WHERE artist_id=${artistId}
`;

module.exports = getInsertId(updateArtistGenreById);
