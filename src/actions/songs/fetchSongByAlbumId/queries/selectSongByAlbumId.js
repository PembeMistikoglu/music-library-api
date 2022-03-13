const { submitQuery, camelKeys } = require("~root/lib/database");

const selectSongByAlbumId = ({ albumId }) => submitQuery`
   
SELECT song_id, Songs.name, Artists.name, Artists.genre, Albums.name, Albums.year
FROM Songs
LEFT JOIN Artists ON Artists.artist_id = Songs.artist_id
LEFT JOIN Albums ON Albums.album_id = Songs.album_id
WHERE Songs.album_id=${albumId}
    `;

module.exports = camelKeys(selectSongByAlbumId);

// this one is the correct way!
// SELECT song_id, song_name, artist_name, artist_genre, album_name, album_year
// FROM Songs
// LEFT JOIN Artists ON Artists.artist_id = Songs.artist_id
// LEFT JOIN Albums ON Albums.album_id = Songs.album_id
// WHERE song_id=${songId}
