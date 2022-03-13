const { submitQuery } = require("~root/lib/database");

const deleteSongQuery = ({ songId }) => submitQuery`
    DELETE FROM
        Songs
    WHERE
        song_id=${songId}
`;

module.exports = deleteSongQuery;
