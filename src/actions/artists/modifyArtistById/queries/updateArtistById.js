const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateArtistById = ({ artistId, genre = null, name = null }) => {
  const updates = [];

  if (genre !== null) {
    updates.push(sql`genre = ${genre}`);
  }

  if (name !== null) {
    updates.push(sql`name = ${name}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
    UPDATE 
      Artists
    SET
      ${updates.reduce(sqlReduce)}
    WHERE
      artist_id = ${artistId};
  `;
  }
  return Promise.resolve();
};

module.exports = updateArtistById;
