const { submitQuery } = require("~root/lib/database");

const updateAlbumByAlbumId = ({ albumId, name, year }) => submitQuery`
    UPDATE Albums
    SET name=${name}, year=${year}
    WHERE album_id=${albumId};
`;

module.exports = updateAlbumByAlbumId;
