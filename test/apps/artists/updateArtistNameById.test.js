const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
// const updateArtistGenreById = require("./queries/updateArtistGenreById");

safeDescribe("#PATCH artist name by artistId", () => {
  let artistId;

  //   before(async () => {
  //     await updateArtistGenreById({ artistId });
  //   });
  before(async () => {});

  it("updates artist name by id", async () => {
    const response = await request(router)
      .patch(`/artists-name/${artistId}"`)
      .send({
        name: "Charlotte"
      });

    // artistIdUpdated = response.body.artistId;
    // console.log(response.body.name, "here it is Pembe!");
    expect(response.status).to.equal(201);
    // expect(response.changedRows).to.equal(1);
    // expect(response.name).to.equal("Charlotte");
  });
});
