const { submitQuery } = require("~root/lib/database");

const deleteAlbumQuery = ({ albumId }) => submitQuery`
    DELETE FROM
        Albums
    WHERE
        album_id=${albumId}
`;

module.exports = deleteAlbumQuery;
