import { shallowMount } from "@vue/test-utils";
import EditablePost from "@/components/EditablePost.vue";
import { localVue, store, posts } from "../mockStore";
import sinon from "sinon";

describe("EditablePost.vue", () => {
  let wrapper;
  const post = posts[0];
  let sandbox;
  let vm;

  beforeEach(() => {
    wrapper = shallowMount(EditablePost, {
      propsData: { post },
      localVue,
      store
    });
    sandbox = sinon.createSandbox();
    vm = wrapper.vm;
  });

  afterEach(() => {
    wrapper.destroy();
    sandbox.restore();
  });

  it("should render", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(vm.post).toEqual(post);
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should trigger UPDATE_POST function", () => {
    const updateSpy = sandbox.spy(vm, "UPDATE_POST");
    const newPost = {
      title: "newTitle",
      message: "newMesage"
    };

    const title = wrapper.find("input");
    title.element.value = newPost.title;
    title.trigger("input");

    const message = wrapper.find("textarea");
    message.element.value = newPost.message;
    message.trigger("input");

    expect(wrapper.emitted().toggleEditable).toBeFalsy();
    const button = wrapper.find("button");
    button.trigger("submit");

    expect(updateSpy.calledOnce).toBeTruthy();
    expect(wrapper.emitted().toggleEditable).toBeTruthy();
    expect(vm.formObj.title).toEqual(newPost.title);
    expect(vm.formObj.message).toEqual(newPost.message);
  });

  it("should trigger ADD_POST function", () => {
    const addSpy = sandbox.spy(vm, "ADD_POST");
    const newPost = {
      title: "newTitle",
      message: "newMesage"
    };

    wrapper.setProps({ post: {} });
    const title = wrapper.find("input");
    title.element.value = newPost.title;
    title.trigger("input");

    const message = wrapper.find("textarea");
    message.element.value = newPost.message;
    message.trigger("input");

    const button = wrapper.find("button");
    button.trigger("submit");

    expect(addSpy.calledOnce).toBeTruthy();
    expect(vm.formObj.title).toEqual("");
    expect(vm.formObj.message).toEqual("");
  });
});
