const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
const selectAlbumByAlbumId = require("./queries/selectAlbumByAlbumId");
const updateAlbumById = require("./queries/updateAlbumById");

safeDescribe("#PATCH album details by albumId", () => {
  const albumId = 1;

  after(async () => {
    await updateAlbumById({
      albumId,
      name: "Currents",
      year: 2015
    });
  });

  it("updates artist name by id", async () => {
    const response = await request(router)
      .patch(`/albums/${albumId}`)
      .send({
        name: "The Slow Rush",
        year: 2020
      });

    expect(response.status).to.equal(201);
    const result = await selectAlbumByAlbumId({ albumId });
    expect(result).to.eql([
      { albumId: 1, name: "The Slow Rush", year: 2020, artistId: 1 }
    ]);
  });
});
