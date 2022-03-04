const { submitQuery, getInsertId } = require("~root/lib/database");

const insertArtist = ({ artistName, artistGenre }) => submitQuery`
    INSERT INTO Artists(artist_name, artist_genre)
    VALUE(${artistName}, ${artistGenre});
`;

module.exports = getInsertId(insertArtist);
