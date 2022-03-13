const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET songs", () => {
  it("should select all songs list", async () => {
    const res = await request(router)
      .get(`/songs`)
      .send();

    expect(res.statusCode).to.equal(201);
    expect(res.body).to.eql({
      songs: [
        {
          albumId: 4,
          artistId: 3,
          name: "Just Friends",
          songId: 1
        },
        {
          albumId: 4,
          artistId: 3,
          name: "Numb",
          songId: 2
        },
        {
          albumId: 4,
          artistId: 3,
          name: "NoWhere To Go",
          songId: 3
        },
        {
          albumId: 3,
          artistId: 2,
          name: "Good Life",
          songId: 4
        }
      ]
    });
  });
});
