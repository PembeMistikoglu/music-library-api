const { submitQuery } = require("~root/lib/database");

const deleteArtistById = ({ songId }) => submitQuery`
    DELETE FROM
        Songs
    WHERE
        song_id=${songId}
`;

module.exports = deleteArtistById;
