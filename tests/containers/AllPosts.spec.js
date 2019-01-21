import { shallowMount } from "@vue/test-utils";
import AllPosts from "@/containers/AllPosts.vue";
import { localVue, store, posts } from "../mockStore";

describe("AllPosts.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AllPosts, { localVue, store });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should render", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.vm.posts).toEqual(posts);
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
