import postService from "@/apis/postService";

describe("services testing", () => {
  it("can call getPosts", () => {
    let triggered = false;
    const resolve = () => {
      triggered = true;
    };
    postService.getPosts(resolve).then(() => {
      expect(triggered).to.equal(true);
    });
  });
});
