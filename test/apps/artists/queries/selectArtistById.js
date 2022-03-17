const { submitQuery, camelKeys } = require("~root/lib/database");

const selectArtistById = ({ artistId }) => submitQuery`
    SELECT 
       artist_id, name, genre
    FROM Artists
    WHERE artist_id= ${artistId}
    `;

module.exports = camelKeys(selectArtistById);
