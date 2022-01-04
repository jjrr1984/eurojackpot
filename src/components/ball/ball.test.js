import Ball from "./ball";
import { render } from '@testing-library/react';

describe('<Ball/>', () => {

    it("Ball with standard number is rendered properly", () => {
        const component = render(<Ball number={7} />);
        expect(component.queryByText("7")).not.toBeNull();
    });

    it("Ball with special number is rendered properly", () => {
        const component = render(<Ball number={6} specialNumber />);
        expect(component.queryByText("6")).not.toBeNull();
    });

    it("Ball is rendered with '?' when no number is provided", () => {
        const component = render(<Ball />);
        expect(component.queryByText("?")).not.toBeNull();
    });
});