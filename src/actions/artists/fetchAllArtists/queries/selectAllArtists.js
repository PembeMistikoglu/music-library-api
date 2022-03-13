const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllArtists = () => submitQuery`
    SELECT 
        name
    FROM Artists
`;

module.exports = camelKeys(selectAllArtists);
