import PropTypes from 'prop-types';
import combinations from '../../data/combinations';
import "./Prizes.css";


function Prizes({
    odds = null
}) {
    let positions = [];
    for (let i = 1; i <= 12; i++) {
        positions.push(i);
    }

    return (
        <div className="Prizes">
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
                        odds && positions.map((position) => {
                            const { winners, prize } = odds[`rank${position}`];
                            const formattedWinners = new Intl.NumberFormat('en-GB', { maximumSignificantDigits: 3 }).format(winners);
                            const formattedPrize = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR' }).format(prize);
                            return (
                                <tr key={`row-${position}`}>
                                    <td>
                                        {position}
                                    </td>
                                    <td>
                                        {combinations[position - 1]}
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