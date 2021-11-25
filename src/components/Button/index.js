import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

function Button({ children, onCLick, width}){
    return (
        <button className="button" onClick={onCLick} style={width}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onClick: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired

}

export default Button