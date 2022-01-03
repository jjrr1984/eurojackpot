import { mount } from "enzyme";
import App from './App';

const mountComponent = (props = {}) => {
  return mount(
    <App {...props} />
  );
};

let mountedComponent = mountComponent();

describe("<App/>", () => {
  it("should be defined", () => {
    expect(mountedComponent).toBeDefined();
  });

  it("the initial class of the main div should be .isLoading", () => {
    expect(mountedComponent.exists('.isLoading')).toBeTruthy;
  });

  it("should be empty when loading", () => {
    expect(mountedComponent.find('.isLoading').isEmpty()).toBeTruthy();
  });

  it("should be filled after loading", () => {
    mountedComponent.instance().setIsFetching(false);
    expect(mountedComponent.find('.App').children()).to.have.lengthOf(4);
  });
});
