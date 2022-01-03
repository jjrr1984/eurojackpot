import PropTypes from 'prop-types';
import moment from "moment";
import "./Footer.css";

function Footer({ nextDate }) {
    const parsedDate = moment(nextDate, "DDMMYYYY");
    const formattedDate = moment(parsedDate).format("dddd DD MMM YYYY");
    return (
        <div className='footer'>
            <span className='footer-fixed-part'>Next drawing will be on</span>
            <span className='footer-date'>{formattedDate}</span>
        </div>
    );
}

Footer.propTypes = {
    nextDate: PropTypes.string
}

export default Footer;