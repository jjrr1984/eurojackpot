import PropTypes from 'prop-types';
import combinations from '../../data/combinations';

function getCombinationText(combination) {
    const rightNumbers = combination.split(",")[0];
    const rightEuroNumbers = combination.split(",")[1];
    const numbersPluralSuffix = rightNumbers === "1" ? "" : "s";
    const euroNumbersPluralSuffix = rightEuroNumbers === "1" ? "" : "s";
    return `${rightNumbers} number${numbersPluralSuffix} + ${rightEuroNumbers} euro number${euroNumbersPluralSuffix}`;
}

function Prizes({
    odds = null
}) {
    return (
        <div className="prizes">
            <table>
                <thead>
                    <tr>
                        <th>
                            Tier
                        </th>
                        <th>
                            Match
                        </th>
                        <th>
                            Winners
                        </th>
                        <th>
                            Amount
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        odds && combinations.map((combination, position) => {
                            const { winners, prize } = odds[`rank${position + 1}`];
                            const formattedWinners = new Intl.NumberFormat('en-GB', { maximumSignificantDigits: 3 }).format(winners);
                            const formattedPrize = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR' }).format(prize);
                            return (
                                <tr data-testid="prize_data_row" key={`row-${position + 1}`}>
                                    <td>
                                        {position + 1}
                                    </td>
                                    <td>
                                        {getCombinationText(combination)}
                                    </td>
                                    <td>
                                        {formattedWinners}
                                    </td>
                                    <td>
                                        {formattedPrize}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

Prizes.propTypes = {
    odds: PropTypes.object
};

export default Prizes;