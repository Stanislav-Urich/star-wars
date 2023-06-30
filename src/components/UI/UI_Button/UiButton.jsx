import PropTypes from 'prop-types'
import cn from 'classnames'

import style from './style.module.css'

const UiButton = ( {text, disabled, onClick, theme='dark', classes } ) => {
   
    return (
        <button
            className={cn(style.button, style[theme], classes)}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

UiButton.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    theme: PropTypes.string,
    
}

export default UiButton;