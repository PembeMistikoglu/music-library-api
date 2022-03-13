const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#PATCH album details by albumId", () => {
  const albumId = 1;

  before(async () => {});

  it("updates artist name by id", async () => {
    const response = await request(router)
      .patch(`/albums/${albumId}`)
      .send({
        name: "Mona Pink",
        year: 2021
      });

    expect(response.status).to.equal(201);
    // Ask Ersel;
    // expect(response.body.message).to. what??
    // expect(response.changedRows).to.equal(1);
    // expect(response.name).should.to.contain?("Charlotte");
  });
});
