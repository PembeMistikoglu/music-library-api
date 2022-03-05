const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
// const getStudentJWTToken = require("~test/utils/getStudentJWTToken");
// const deleteBlogCommentById = require("./queries/deleteBlogCommentById");
// const selectAllAlbums = ("../src/actions/albums/fetchAllAlbums/queries/selectAllAlbums.js")
// const selectAllAlbums = require("../src/actions/albums/fetchAllAlbums/queries/selectAllAlbums");

safeDescribe("#GET albums", () => {
  // let albums;
  // const testPageId = 1;

  before(async () => {
    // await getAllAlbums();
  });

  it("should select all albums list", async () => {
    const res = await request(router)
      .get(`/albums`)
      .send()
      .set("Authorization", `Bearer nope`)
      .set("Accept", "application/json");
    expect(res.statusCode).to.equal(201);
    console.log(res.body, "<<<< PEMBE TODO: THIS IS THE RESPONSE");
    expect(res.body).to.eql([
      { album_id: 1, album_name: "Page", album_year: 2020 }
    ]);
  });

  // it("should reject requests to non-existent page", async () => {
  //   const noSuchBlogId = 9119239;
  //   const res = await request(app)
  //     .post(`/blog/${noSuchBlogId}/comment/post`)
  //     .send({ commentContent: "This is a comment." });
  //   expect(res.statusCode).to.equal(400);
  //   expect(res.body).to.eql([
  //     {
  //       message: "Blog must exist",
  //       path: "blogId"
  //     }
  //   ]);
  // });

  // it("should get page details", async () => {
  //   const res = await request(app)
  //     .post(`/blog/${testBlogId}/comment/post`)
  //     .send({ commentContent: "This is a comment." });
  //   insertedBlogCommentId = res.body.blogComment.insertId;
  //   expect(res.statusCode).to.equal(200);
  // });
});
