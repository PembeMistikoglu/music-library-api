const { submitQuery } = require("~root/lib/database");

const insertSongByAlbumId = ({ albumId, songName, artistId }) => submitQuery`
INSERT INTO Songs (album_id, song_name, artist_id)
VALUES (${albumId},${songName}, ${artistId});
`;

module.exports = insertSongByAlbumId;
