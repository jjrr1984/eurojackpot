import PropTypes from 'prop-types';
import moment from "moment";

function Footer({ nextDate }) {
    const parsedDate = nextDate ? moment(nextDate, "DDMMYYYY") : null;
    const formattedDate = parsedDate ? moment(parsedDate).format("dddd DD MMM YYYY") : null;
    return (
        <>
            {formattedDate && (
                <div className='footer'>
                    <div className='footer-fixed-part'>
                        Next drawing will be on
                    </div>
                    <div className='footer-date'>
                        {formattedDate}
                    </div>
                </div>
            )}
        </>
    );
}

Footer.propTypes = {
    nextDate: PropTypes.string
}

export default Footer;