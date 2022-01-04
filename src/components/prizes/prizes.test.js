import Prizes from "./prizes";
import { render } from '@testing-library/react';
import drawings from "../../data/drawings";

describe('<Prizes/>', () => {

    it("No data rows are rendered in case odds couldn't be retrieved", () => {
        const component = render(<Prizes />);
        expect(component.queryAllByTestId("prize_data_row")).toHaveLength(0);
    });

    it("12 prize combinations are rendered with right odds", () => {
        const component = render(<Prizes odds={drawings.last.odds} />);
        expect(component.queryAllByTestId("prize_data_row")).toHaveLength(12);
    });
});