const { submitQuery, getInsertId } = require("~root/lib/database");

const insertAlbumByArtistId = ({ name, year, artistId }) => submitQuery`
INSERT INTO Albums (name, year, artist_id)
VALUES (${name}, ${year}, ${artistId});
`;

module.exports = getInsertId(insertAlbumByArtistId);
