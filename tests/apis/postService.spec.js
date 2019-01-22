import postService, { _posts } from "@/apis/postService";

describe("services testing", () => {
  it("can call getPosts", done => {
    const resolve = data => {
      expect(data).toEqual(_posts);
      done();
    };

    postService.getPosts(resolve);
  });
});
