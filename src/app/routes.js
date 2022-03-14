const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");

// Artists //

const getAllArtists = require("./controllers/artists/getAllArtists");
const postArtist = require("./controllers/artists/postArtist");
const getArtistById = require("./controllers/artists/getArtistById");
const updateArtistById = require("./controllers/artists/updateArtistById");
const deleteArtistById = require("./controllers/artists/deleteArtistById");

// Albums //

const getAllAlbums = require("./controllers/albums/getAllAlbums");
const getAlbumsByArtistId = require("./controllers/albums/getAlbumsByArtistId");
const getAlbumsByAlbumId = require("./controllers/albums/getAlbumByAlbumId");
const postAlbumByArtistId = require("./controllers/albums/postAlbumByArtistId");
const updateAlbumsByAlbumId = require("./controllers/albums/updateAlbumsByAlbumId");
const deleteAlbumByAlbumId = require("./controllers/albums/deleteAlbumByAlbumId");

// Songs //

const postSong = require("./controllers/songs/postSong");
const getSongByAlbumId = require("./controllers/songs/getSongByAlbumId");
const getAllSongs = require("./controllers/songs/getAllSongs");
const getSongByArtistId = require("./controllers/songs/getSongByArtistId");
const deleteSongById = require("./controllers/songs/deleteSongById");
const updateSongById = require("./controllers/songs/updateSongById");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);
router.get("/user-types", getUserTypes);

// Artists //

// this one below is extra
router.get("/artists", getAllArtists);
router.post("/artists", postArtist);
router.get("/artists/:artistId", getArtistById);
router.patch("/artist/:artistId", updateArtistById);
router.delete("/artists/:artistId", deleteArtistById);

// Albums //

router.get("/albums", getAllAlbums);
router.post("/artists/:artistId/album", postAlbumByArtistId);
router.get("/artists/:artistId/albums", getAlbumsByArtistId);
router.get("/albums/:albumId", getAlbumsByAlbumId);
router.patch("/albums/:albumId", updateAlbumsByAlbumId);
router.delete("/albums/:albumId", deleteAlbumByAlbumId);

// Songs //

router.post("/artists/:artistId/albums/:albumId/songs", postSong);
router.get("/songs", getAllSongs);
router.get("/albums/:albumId/songs", getSongByAlbumId);
router.get("/artists/:artistId/songs", getSongByArtistId);
router.patch("/songs/:songId", updateSongById);
router.delete("/songs/:songId", deleteSongById);

module.exports = router;
