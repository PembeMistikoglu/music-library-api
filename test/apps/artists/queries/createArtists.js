const { submitQuery, getInsertId } = require("~root/lib/database");

const insertArtist = ({ name, genre }) => submitQuery`
    INSERT INTO Artists(name, genre)
    VALUE(${name}, ${genre});
`;

module.exports = getInsertId(insertArtist);
