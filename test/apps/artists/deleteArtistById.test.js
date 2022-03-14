const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
const createArtist = require("./queries/createArtists");

safeDescribe("DELETE /artists/:artistId", () => {
  let artistIdToDelete;

  before(async () => {
    artistIdToDelete = await createArtist({
      name: "l'impetrarice",
      genre: "french touch"
    });
  });

  it("deletes artist record by id", async () => {
    const res = await request(router).delete(`/artists/${artistIdToDelete}`);
    expect(res.status).to.equal(204);
  });
});
