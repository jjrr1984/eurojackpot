import "./Title.css";
import PropTypes from 'prop-types';

function Title(
    { lastDate }
) {
    return (
        <div className='title'>
            <span className='title-fixed-part'>Eurojackpot results for</span>
            <span className='date'>{lastDate}</span>
        </div>
    );
}

Title.propTypes = {
    lastDate: PropTypes.string
};

export default Title;