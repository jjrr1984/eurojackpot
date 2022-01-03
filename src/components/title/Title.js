import PropTypes from 'prop-types';
import moment from "moment";

function Title(
    { lastDate = null }
) {
    const parsedDate = lastDate ? moment(lastDate, "DDMMYYYY") : null;
    const formattedDate = parsedDate ? moment(parsedDate).format("dddd DD MMM YYYY") : null;
    return (
        <div className='title'>
            <div className='title-fixed-part'>Eurojackpot results for</div>
            {formattedDate && (
                <div className='date'>{formattedDate}</div>
            )}
        </div>
    );
}

Title.propTypes = {
    lastDate: PropTypes.string
};

export default Title;