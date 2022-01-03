import PropTypes from 'prop-types';
import classNames from "classnames";

function Ball({
    index,
    specialNumber = false,
    number
}) {
    const ballClassNames = classNames({
        'sn': !specialNumber,
        'sp': specialNumber,
        'singleNumber': true
    });
    return (
        <div key={`sn-${index}`} className={ballClassNames}>
            <div className='circle-text'>
                {number}
            </div>
        </div>
    );
}

Ball.propTypes = {
    index: PropTypes.number.isRequired,
    specialNumber: PropTypes.bool.isRequired,
    number: PropTypes.number.isRequired
};

export default Ball;