import PropTypes from 'prop-types';
import moment from "moment";

function Footer({ nextDate }) {
    const parsedDate = moment(nextDate, "DDMMYYYY");
    const formattedDate = moment(parsedDate).format("dddd DD MMM YYYY");
    return (
        <div className='footer'>
            <div className='footer-fixed-part'>Next drawing will be on</div>
            <div className='footer-date'>{formattedDate}</div>
        </div>
    );
}

Footer.propTypes = {
    nextDate: PropTypes.string
}

export default Footer;