const { submitQuery, getInsertId } = require("~root/lib/database");

const updateAlbumByAlbumId = ({ albumId, albumName, albumYear }) => submitQuery`
    UPDATE Albums
    SET album_name=${albumName}, album_year=${albumYear}
    WHERE album_id=${albumId};
`;

module.exports = getInsertId(updateAlbumByAlbumId);
