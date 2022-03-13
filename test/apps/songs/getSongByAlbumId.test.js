const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET /albums/:albumId/songs", () => {
  const albumId = 3;

  before(async () => {});

  it("should select songs by albumId", async () => {
    const response = await request(router)
      .get(`/albums/${albumId}/songs`)
      .send();

    console.log(response.body, "<<<<here it is Pembe!");
    expect(response.statusCode).to.equal(201);
    expect(response.body).to.equal({
      song: [{ songId: 4, name: "GenerationWhy", genre: "EDM", year: 2016 }]
    });
  });
});
