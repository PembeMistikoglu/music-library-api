const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET /artists//:artistId/albums", () => {
  const artistId = 3;

  // ask Ersel, I think we don't need before here
  before(async () => {});

  it("should select albums by artist id", async () => {
    const res = await request(router)
      .get(`/artists/${artistId}/albums`)
      .send();

    console.log(res.body, "<<<<here it is Pembe!");
    expect(res.statusCode).to.equal(201);
    expect(res.body).to.equal([
      {
        album: { albumId: 4, name: "Between Us", year: 2019, artistId: 3 }
      }
    ]);
  });
});
// AssertionError: expected { album: [ { albumId: 4, …(3) } ] } to equal [ { album: { albumId: 4, …(3) } } ]
