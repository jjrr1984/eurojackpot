import PropTypes from 'prop-types';
import classNames from "classnames";

function Ball({
    specialNumber = false,
    number
}) {
    const ballClassNames = classNames({
        'sn': !specialNumber,
        'sp': specialNumber,
        'singleNumber': true
    });

    return (
        <div className={ballClassNames}>
            <div className='circle-text'>
                {number}
            </div>
        </div>
    );
}

Ball.propTypes = {
    specialNumber: PropTypes.bool,
    number: PropTypes.number.isRequired
};

export default Ball;