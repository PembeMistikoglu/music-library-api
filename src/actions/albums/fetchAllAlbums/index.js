const selectAllAlbums = require("./queries/selectAllAlbums");

const fetchAllAlbums = async () => {
  const albums = await selectAllAlbums();

  return { albums };
};

module.exports = fetchAllAlbums;
