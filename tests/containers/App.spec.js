import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import { localVue, store } from "../mock";

describe("App.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App, {
      localVue,
      store,
      stubs: ["router-link", "router-view"]
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should render", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
