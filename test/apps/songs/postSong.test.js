const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
const deleteSong = require("./queries/deleteSong");

safeDescribe("#POST artists", () => {
  let songIdCreated;
  const artistId = 1;
  const albumId = 1;

  after(async () => {
    await deleteSong({ songId: songIdCreated });
  });

  it("creates a new artist in the database", async () => {
    const response = await request(router)
      .post(`/artists/${artistId}/albums/${albumId}/songs`)
      .send({
        name: "Colorado"
      });

    songIdCreated = response.body.songId;
    expect(response.status).to.equal(201);
  });
});
