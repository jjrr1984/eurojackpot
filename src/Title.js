import "./Title.css";
import PropTypes from 'prop-types';
import moment from "moment";

function Title(
    { lastDate }
) {
    const parsedDate = moment(lastDate, "DDMMYYYY");
    const formattedDate = moment(parsedDate).format("dddd DD MMM YYYY");
    return (
        <div className='title'>
            <span className='title-fixed-part'>Eurojackpot results for</span>
            <span className='date'>{formattedDate}</span>
        </div>
    );
}

Title.propTypes = {
    lastDate: PropTypes.string
};

export default Title;