import PropTypes from 'prop-types';
import combinations from './combinations';
import "./Prices.css";


function Prices({
    odds
}) {
    let positions = [];
    for (let i = 1; i <= 12; i++) {
        positions.push(i);
    }

    return (
        <div className="prices">
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
                            return (
                                <tr key={`row-${position}`}>
                                    <td>
                                        {position}
                                    </td>
                                    <td>
                                        {combinations[position - 1]}
                                    </td>
                                    <td>
                                        {winners}
                                    </td>
                                    <td>
                                        {`${prize} €`}
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

Prices.propTypes = {
    odds: PropTypes.object
};

export default Prices;