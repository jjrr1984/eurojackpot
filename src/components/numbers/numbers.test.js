import Numbers from "./numbers";
import { render, screen } from '@testing-library/react';

describe('<Numbers/>', () => {

    it("Error message is rendered if numbers length is not accurate", () => {
        const component = render(<Numbers />);
        expect(component.queryByText("Invalid numbers length")).not.toBeNull();
    });

    it("Rendering numbers if data provided is right", () => {
        const component = render(<Numbers
            standardNumbers={[1, 2, 3, 4, 5]}
            specialNumbers={[6, 7]} />);
        expect(component.queryAllByTestId("ball_component")).toHaveLength(7);
    });
});