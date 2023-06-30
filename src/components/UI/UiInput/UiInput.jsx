import PropTypes from 'prop-types'
import cn from 'classnames'

import clear from './img/clear.svg'

import style from './style.module.css'

const UiInput = ({ value, onChange, classes }) => {


    const clearInput = () => {
        onChange('');
    };

    return (
        <div className={cn(style.wrapper__input, classes)}>
            <input
                className={style.inputUi}
                type='text'
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <img
                className={cn(style.clear, !value && style.clear__desabled)}
                onClick={clearInput}
                src={clear} />
        </div>
    );
}


UiInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    classes: PropTypes.string,
}


export default UiInput;