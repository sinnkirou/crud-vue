/**
 * Mocking client-server processing
 */
export const _posts = [
  {
    id: "45745c60-7b1a-11e8-9c9c-2d42b21b1a3e",
    title: "My journey with Vue",
    message: "My journey with Vue"
  },
  {
    id: "45745c60-7b1a-11e8-9c9c-2d42b21b1a3f",
    title: "Blogging with Vue",
    message: "Blogging with Vue"
  },
  {
    id: "45745c60-7b1a-11e8-9c9c-2d42b21b1a3g",
    title: "Why Vue is so fun",
    message: "Why Vue is so fun"
  }
];

export default {
  getPosts(resolve) {
    return new Promise(() => setTimeout(() => resolve(_posts), 1000));
  }
};
