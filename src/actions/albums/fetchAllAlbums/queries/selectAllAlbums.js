const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllAlbums = () => submitQuery`
    SELECT 
        *
    FROM Albums
`;

module.exports = camelKeys(selectAllAlbums);
