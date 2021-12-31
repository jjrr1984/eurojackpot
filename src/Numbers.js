import PropTypes from 'prop-types';
import './Numbers.css';

function Numbers({
    standardNumbers,
    specialNumbers
}) {
    return (
        <div className='numbers'>
            <div className='standardNumbers'>
                {standardNumbers.map((number, index) => {
                    return (
                        <div key={`sn-${index}`} className='sn'>
                            <div className='circle-text'>
                                {number}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='separator'>
                +
            </div>
            <div className='specialNumbers'>
                {specialNumbers.map((number, index) => {
                    return (
                        <div key={`sp-${index}`} className='sp'>
                            <div className='circle-text'>
                                {number}
                            </div>
                        </div>
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