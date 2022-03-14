const { submitQuery, getInsertId } = require("~root/lib/database");

const insertSong = ({ albumId, name, artistId }) => submitQuery`
INSERT INTO Songs (album_id, name, artist_id)
VALUES (${albumId}, ${name}, ${artistId});
`;

module.exports = getInsertId(insertSong);
