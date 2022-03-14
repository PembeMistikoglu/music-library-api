const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET /artists/:artistId/albums", () => {
  const artistId = 3;

  it("should select albums by artist id", async () => {
    const res = await request(router)
      .get(`/artists/${artistId}/albums`)
      .send();

    expect(res.statusCode).to.equal(201);
    expect(res.body).to.eql({
      album: [{ albumId: 4, name: "Between Us", year: 2019, artistId: 3 }]
    });
  });
});
