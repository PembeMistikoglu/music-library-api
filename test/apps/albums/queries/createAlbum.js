const { submitQuery, getInsertId } = require("~root/lib/database");

const insertAlbum = ({ name, year, artistId }) => submitQuery`
    INSERT INTO Albums(name, year, artist_id)
    VALUE(${name}, ${year}, ${artistId});
`;

module.exports = getInsertId(insertAlbum);
