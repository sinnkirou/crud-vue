import { shallowMount } from "@vue/test-utils";
import PostItem from "@/components/PostItem.vue";
import { localVue, store, posts } from "../mockStore";
import sinon from "sinon";

describe("PostItem.vue", () => {
  let wrapper;
  let vm;
  let sandbox;
  const post = posts[0];

  beforeEach(() => {
    wrapper = shallowMount(PostItem, {
      propsData: { post },
      localVue,
      store
    });
    vm = wrapper.vm;
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    wrapper.destroy();
    sandbox.restore();
  });

  it("should render", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.vm.post).toEqual(post);
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should toggle editable", () => {
    expect(vm.editable).toEqual(false);
    var editBtn = wrapper.find("button.edit");
    editBtn.trigger("click");
    expect(vm.editable).toEqual(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should toggle delete", () => {
    const deleteSpy = sandbox.spy(vm, "DELETE_POST");

    var deleteBtn = wrapper.find("button.delete");
    deleteBtn.trigger("click");
    expect(deleteSpy.calledOnce).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });
});
