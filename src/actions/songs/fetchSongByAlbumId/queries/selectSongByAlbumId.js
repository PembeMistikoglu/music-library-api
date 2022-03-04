const { submitQuery, camelKeys } = require("~root/lib/database");

const selectSongByAlbumId = () => submitQuery`
   
SELECT Songs.*, Artists.*, Albums.*
FROM Songs
INNER JOIN Artists ON Songs.artist_id = Artists.artist_id
INNER JOIN Albums ON Artists.artist_id = Albums.artist_id;
    `;

module.exports = camelKeys(selectSongByAlbumId);

// this one is the correct way!
// SELECT song_id, song_name, artist_name, artist_genre, album_name, album_year
// FROM Songs
// LEFT JOIN Artists ON Artists.artist_id = Songs.artist_id
// LEFT JOIN Albums ON Albums.album_id = Songs.album_id
// WHERE song_id=${songId}
