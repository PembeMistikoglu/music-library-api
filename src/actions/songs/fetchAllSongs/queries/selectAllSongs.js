const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllSongs = () => submitQuery`
   
SELECT 
    *
FROM 
    Songs
    `;

module.exports = camelKeys(selectAllSongs);
