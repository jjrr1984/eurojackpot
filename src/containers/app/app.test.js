import App from "./app";
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";

const component = render(<App />);

describe("<App/>", () => {
    it("App main container shouldn't be showing data at start", () => {
        expect(component.queryByTestId("app_main_container")).toBeEmptyDOMElement();
    });
});