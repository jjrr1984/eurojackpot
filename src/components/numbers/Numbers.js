import PropTypes from 'prop-types';
import { Ball } from "../";

function Numbers({
    standardNumbers = [],
    specialNumbers = []
}) {
    const validNumbersLength =
        (standardNumbers.length === 5) &&
        (specialNumbers.length === 2);
    return (

        <div className='numbers'>
            {validNumbersLength && (
                <>
                    <div className='setOfNumbers'>
                        {standardNumbers.map((number, index) => {
                            return (
                                <Ball
                                    key={`sn-${index}`}
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
                                    key={`sp-${index}`}
                                    number={number}
                                    specialNumber={true}
                                />
                            );
                        })}
                    </div>
                </>
            )}
            {!validNumbersLength && (
                <span>Invalid numbers length</span>
            )}
        </div>
    );
}

Numbers.propTypes = {
    standardNumbers: PropTypes.arrayOf(PropTypes.number),
    specialNumbers: PropTypes.arrayOf(PropTypes.number)
};

export default Numbers;