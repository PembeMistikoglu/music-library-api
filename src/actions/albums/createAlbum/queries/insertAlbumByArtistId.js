const { submitQuery } = require("~root/lib/database");

const insertAlbumByArtistId = ({
  artistId,
  albumName,
  albumYear
}) => submitQuery`
INSERT INTO Albums (album_name, album_year, artist_id)
VALUES (${albumName},${albumYear}, ${artistId});
`;

module.exports = insertAlbumByArtistId;
