import { shallowMount } from "@vue/test-utils";
import EditablePost from "@/components/EditablePost.vue";
import { localVue, store } from "../mockStore";
import sinon from "sinon";

describe("EditablePost.vue", () => {
  let wrapper;
  const post = {
    id: "1",
    title: "title",
    message: "message"
  };
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

  afterEach(() => {
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
    const updateSpy = sandbox.spy();
    const emitSpy = sandbox.spy();
    sandbox.stub(vm, "UPDATE_POST").callsFake(() => updateSpy());
    sandbox.stub(vm, "$emit").callsFake(() => emitSpy());
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

    const button = wrapper.find("button");
    button.trigger("submit");

    expect(updateSpy.calledOnce).toEqual(true);
    expect(emitSpy.calledOnce).toEqual(true);
    expect(vm.formObj.title).toEqual(newPost.title);
    expect(vm.formObj.message).toEqual(newPost.message);
  });

  it("should trigger ADD_POST function", () => {
    const addSpy = sandbox.spy();
    sandbox.stub(vm, "ADD_POST").callsFake(() => addSpy());
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

    expect(addSpy.calledOnce).toEqual(true);
    expect(vm.formObj.title).toEqual("");
    expect(vm.formObj.message).toEqual("");
  });
});
