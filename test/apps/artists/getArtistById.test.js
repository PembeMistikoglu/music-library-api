const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET /artists/:artistId", () => {
  const artistId = 1;
  // const artist = artists[0];
  before(async () => {});

  it("should select artist by artistId", async () => {
    const res = await request(router)
      .get(`/artists/${artistId}`)
      .send();

    console.log(res.body, "<<<<here it is Pembe!");
    expect(res.statusCode).to.equal(201);
    expect(res.body).to.equal({
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
