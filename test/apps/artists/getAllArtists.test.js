const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET albums", () => {
  it("should select all artists list", async () => {
    const response = await request(router)
      .get("/artists")
      .send();

    expect(response.statusCode).to.equal(201);
    expect(response.body).to.eql({
      artists: [
        { artistId: 1, name: "Tame Impala", genre: "Electronic" },
        { artistId: 2, name: "Zhu", genre: "EDM" },
        { artistId: 3, name: "Hayden James", genre: "EDM" }
      ]
    });
  });
});
