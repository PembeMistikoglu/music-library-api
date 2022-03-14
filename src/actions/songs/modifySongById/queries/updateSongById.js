const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateAlbumByAlbumId = ({ songId, name = null }) => {
  const updates = [];

  if (name !== null) {
    updates.push(sql`name = ${name}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
    UPDATE 
      Songs
    SET
      ${updates.reduce(sqlReduce)}
    WHERE
      song_id = ${songId};
  `;
  }
  return Promise.resolve();
};

module.exports = updateAlbumByAlbumId;
