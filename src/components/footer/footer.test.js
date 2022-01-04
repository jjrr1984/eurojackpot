import Footer from "./footer";
import { render } from '@testing-library/react';

describe('<Footer/>', () => {

    it("Component is not rendered with empty prop", () => {
        const component = render(<Footer />);
        expect(component.queryByText("Next drawing will be on")).toBeNull();
    });

    it("Component is rendered with filled prop", () => {
        const component = render(<Footer nextDate="01022022" />);
        expect(component.queryByText("Next drawing will be on")).not.toBeNull();
    });
});