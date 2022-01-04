import Title from "./title";
import { render } from '@testing-library/react';

describe('<Title/>', () => {

    it("Alternative title shown if no date could be retrieved", () => {
        const component = render(<Title />);
        expect(component.queryByText("Last Eurojackpot results")).not.toBeNull();
    });

    it("Complete title can be shown when right date is retrieved", () => {
        const component = render(<Title lastDate="01012022" />);
        expect(component.queryByText("Eurojackpot results for")).not.toBeNull();
    });
});