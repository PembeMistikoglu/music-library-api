const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET albums", () => {
  before(async () => {});

  it("should select all albums list", async () => {
    const res = await request(router)
      .get(`/albums`)
      .send();

    expect(res.statusCode).to.equal(201);
    expect(res.body).to.eql({
      albums: [
        { albumId: 1, name: "Currents", year: 2015, artistId: 1 },
        {
          albumId: 2,
          name: "The Slow Rush",
          year: 2020,
          artistId: 1
        },
        {
          albumId: 3,
          name: "GenerationWhy",
          year: 2016,
          artistId: 2
        },
        {
          albumId: 4,
          name: "Between Us",
          year: 2019,
          artistId: 3
        }
      ]
    });
  });
});
