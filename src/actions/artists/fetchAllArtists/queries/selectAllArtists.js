const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllArtists = () => submitQuery`
    SELECT 
        artist_name
    FROM Artists
`;

module.exports = camelKeys(selectAllArtists);
