import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'


//include images into your bundle

//create your first component
const Counter = (props) => {
    return (
        <div>
            <h1>Counter</h1>
            <div className="containerDigits">
                <div className="digit"><FontAwesomeIcon icon={faClock} /></div>
                <div className="digit">{props.digitSeven}</div>
                <div className="digit">{props.digitSix}</div>
                <div className="digit">{props.digitFive}</div>
                <div className="digit">{props.digitFour}</div>
                <div className="digit">{props.digitThree}</div>
                <div className="digit">{props.digitTwo}</div>
                <div className="digit">{props.digitOne}</div>
            </div>
        </div>
    )
}
Counter.protoTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number,
    digitSeven: PropTypes.number,
}

export default Counter