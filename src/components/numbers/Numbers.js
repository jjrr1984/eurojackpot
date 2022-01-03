import PropTypes from 'prop-types';
import { Ball } from "../";

function Numbers({
    standardNumbers = [],
    specialNumbers = []
}) {
    return (
        <div className='numbers'>
            <div className='setOfNumbers'>
                {standardNumbers.map((number, index) => {
                    return (
                        <Ball
                            index={index}
                            number={number}
                        />
                    );
                })}
            </div>
            <div className='separator'>
                +
            </div>
            <div className='setOfNumbers'>
                {specialNumbers.map((number, index) => {
                    return (
                        <Ball
                            index={index}
                            number={number}
                            specialNumber={true}
                        />
                    );
                })}
            </div>
        </div>
    );
}

Numbers.propTypes = {
    standardNumbers: PropTypes.arrayOf(PropTypes.number),
    specialNumbers: PropTypes.arrayOf(PropTypes.number)
};

export default Numbers;