const { submitQuery, camelKeys } = require("~root/lib/database");

const selectSongByArtistId = ({ artistId }) => submitQuery`
   
SELECT song_id, Songs.name, Artists.name, Artists.genre, Albums.name, Albums.year
FROM Songs
LEFT JOIN Artists ON Artists.artist_id = Songs.artist_id
LEFT JOIN Albums ON Albums.album_id = Songs.album_id
WHERE Songs.artist_id=${artistId}
    `;

module.exports = camelKeys(selectSongByArtistId);
