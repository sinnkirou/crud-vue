import { shallowMount } from "@vue/test-utils";
import AllPosts from "@/containers/AllPosts.vue";
import { localVue, store, posts } from "../mockStore";

describe("AllPosts.vue", () => {
  let wrapper;
  let vm;

  beforeEach(() => {
    wrapper = shallowMount(AllPosts, { localVue, store });
    vm = wrapper.vm;
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should render", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(vm.posts).toEqual(posts);
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("when search successfully", () => {
    expect(vm.keyword).toEqual("");
    var input = wrapper.find("input");
    input.element.value = posts[0].title;
    input.trigger("input");
    expect(vm.keyword).toEqual(posts[0].title);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("when search unsuccessfully", () => {
    expect(vm.keyword).toEqual("");
    var input = wrapper.find("input");
    var keyword = "testdsdd";
    input.element.value = keyword;
    input.trigger("input");
    expect(vm.keyword).toEqual(keyword);
    expect(wrapper.element).toMatchSnapshot();
  });
});
