const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
const selectAlbumByAlbumId = require("./queries/selectAlbumByAlbumId");

safeDescribe("#PATCH album details by albumId", () => {
  const albumId = 1;

  it("updates artist name by id", async () => {
    const response = await request(router)
      .patch(`/albums/${albumId}`)
      .send({
        name: "Mona Pink",
        year: 2021
      });

    expect(response.status).to.equal(201);
    const result = await selectAlbumByAlbumId({ albumId });
    expect(result).to.eql([
      { albumId: 1, name: "Mona Pink", year: 2021, artistId: 1 }
    ]);
  });
});
