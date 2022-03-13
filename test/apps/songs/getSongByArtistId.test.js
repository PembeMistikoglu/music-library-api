const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET /albums/:albumId/songs", () => {
  const artistId = 2;

  // ask Ersel, I think we don't need before
  before(async () => {});

  it("should select songs by albumId", async () => {
    const res = await request(router)
      .get(`/artists/${artistId}/songs`)
      .send();

    expect(res.statusCode).to.equal(201);
    // expect(res.body).to.equal({
    //   song: [
    //     {
    //       songId: 4,
    //       name: "GenerationWhy",
    //       genre: "EDM",
    //       year: 2016
    //     }
    //   ]
    // });
  });
});
