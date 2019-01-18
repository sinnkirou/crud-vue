import { shallowMount } from "@vue/test-utils";
import PostForm from "@/containers/PostForm.vue";

describe("PostForm.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PostForm);
  });

  it("should render", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
