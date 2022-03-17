const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllArtists = () => submitQuery`
    SELECT 
        artist_id, name, genre
    FROM Artists
`;

module.exports = camelKeys(selectAllArtists);
