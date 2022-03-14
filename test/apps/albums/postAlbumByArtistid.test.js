const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
const deleteAlbumById = require("./queries/deleteAlbumById");

safeDescribe("#POST Albums", () => {
  let insertedAlbumId;
  const artistId = 3;

  after(async () => {
    await deleteAlbumById({ albumId: insertedAlbumId });
  });

  it("creates a new album in the database", async () => {
    const response = await request(router)
      .post(`/artists/${artistId}/album`)
      .send({
        name: "Whaaat!",
        year: 1992
      });

    insertedAlbumId = response.body.albumId;
    expect(response.status).to.equal(201);
  });
});
