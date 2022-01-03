import PropTypes from 'prop-types';
import './Numbers.scss';

function Numbers({
    standardNumbers = [],
    specialNumbers = []
}) {
    return (
        <div className='numbers'>
            <div className='setOfNumbers'>
                {standardNumbers.map((number, index) => {
                    return (
                        <div key={`sn-${index}`} className='sn singleNumber'>
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
            <div className='setOfNumbers'>
                {specialNumbers.map((number, index) => {
                    return (
                        <div key={`sp-${index}`} className='sp singleNumber'>
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