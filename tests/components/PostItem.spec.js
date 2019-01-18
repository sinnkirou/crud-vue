import { shallowMount } from "@vue/test-utils";
import PostItem from "@/components/PostItem.vue";

describe("PostItem.vue", () => {
  let wrapper;
  const post = {
    id: "1",
    title: "title",
    message: "message"
  };

  beforeEach(() => {
    wrapper = shallowMount(PostItem, {
      propsData: { post }
    });
  });

  it("should render", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.vm.post).toEqual(post);
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});