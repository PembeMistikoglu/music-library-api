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
const updateArtistNameById = require("./controllers/artists/updateArtistNameById");
const updateArtistGenreById = require("./controllers/artists/updateArtistGenreById");
const deleteArtistById = require("./controllers/artists/deleteArtistById");

// Albums //

const getAllAlbums = require("./controllers/albums/getAllAlbums");
const postAlbumByArtistId = require("./controllers/albums/postAlbumByArtistId");
const updateAlbumsByAlbumId = require("./controllers/albums/updateAlbumsByAlbumId");
const deleteAlbumByAlbumId = require("./controllers/albums/deleteAlbumByAlbumId");

// Songs //
const postSongByAlbumId = require("./controllers/songs/postSongByAlbumId");
const getSongByAlbumId = require("./controllers/songs/getSongByAlbumId");

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

router.post("/artists", postArtist);

router.get("/artists", getAllArtists);

router.get("/artists/:artistId", getArtistById);

router.patch("/artist-name/:artistId", updateArtistNameById);

router.patch("/artist-genre/:artistId", updateArtistGenreById);

router.delete("/delete-artists/:artistId", deleteArtistById);

// Albums //

router.get("/albums", getAllAlbums);

router.post("/artists/:artistId/album", postAlbumByArtistId);

router.get("/artists/:artistId/albums");

router.patch("/albums/:albumId", updateAlbumsByAlbumId);

router.delete("/albums/:albumId", deleteAlbumByAlbumId);

// Songs //

router.post("/album/:albumId/song", postSongByAlbumId);

router.get("/songs", getSongByAlbumId);

module.exports = router;
