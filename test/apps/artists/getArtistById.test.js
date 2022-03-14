const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET /artists/:artistId", () => {
  const artistId = 1;

  it("should select artist by artistId", async () => {
    const res = await request(router)
      .get(`/artists/${artistId}`)
      .send();
    expect(res.statusCode).to.equal(201);
    expect(res.body).to.eql({
      artist: [
        {
          artistId: 1,
          genre: "Electronic",
          name: "Tame Impala"
        }
      ]
    });
  });
});
