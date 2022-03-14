const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET /albums/:albumId/songs", () => {
  const artistId = 2;

  it("should select songs by albumId", async () => {
    const res = await request(router)
      .get(`/artists/${artistId}/songs`)
      .send();

    expect(res.statusCode).to.eql(201);
    expect(res.body).to.eql({
      song: [
        {
          songId: 4,
          name: "GenerationWhy",
          genre: "EDM",
          year: 2016
        }
      ]
    });
  });
});
