const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
// const updateArtistGenreById = require("./queries/updateArtistGenreById");

safeDescribe("#PATCH artist genre by artistId", () => {
  let artistId;
  // let updatedArtistId;

  // after(async () => {
  //   updatedArtistId = await updateArtistGenreById({
  //     artistId: updatedArtistId
  //   });
  // });

  it("updates artist genre by id", async () => {
    const response = await request(router)
      .patch(`/artists-genre/${artistId}`)
      .send({
        genre: "Psychedelic Rock"
      });

    // artistIdUpdated = response.body.artistId;
    // updatedArtistId = response.body.artistId;
    expect(response.status).to.equal(201);
    // expect(updatedArtist.genre).to.equal("Psychedelic Rock");
  });
});

// describe("PATCH /artists/:id", () => {
//     it("updates artist genre by id", (done) => {
//       const artist = artists[0];
//       request(app)
//         .patch(`/artists/${artist.id}`)
//         .send({ genre: "Psychedelic Rock" })
//         .then((res) => {
//           expect(res.status).to.equal(200);
//           Artist.findByPk(artist.id, { raw: true }).then((updatedArtist) => {
//             expect(updatedArtist.genre).to.equal("Psychedelic Rock");
//             done();
//           });
//         })
//         .catch((error) => done(error));
//     });
