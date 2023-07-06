import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { counter } from "@fortawesome/fontawesome-svg-core";
import Swal from 'sweetalert2'



//include images into your bundle

//create your first component
const Timer = (props) => {


    const [data, setData] = useState('');
    const [digitSeven, setSeven] = useState('0');
    const [digitSix, setSix] = useState('0');
    const [digitFive, setFive] = useState('0');
    const [digitFour, setFour] = useState('0');
    const [digitThree, setThree] = useState('0');
    const [digitTwo, setTwo] = useState('0');
    const [digitOne, setOne] = useState('0');

    let interval = useRef();


    const startTime = () => {
        let counter = parseInt(data)

        if (counter > 0) {
            interval = setInterval(() => {
                const seven = Math.floor(counter / 1000000) % 10
                const six = Math.floor(counter / 100000) % 10
                const five = Math.floor(counter / 10000) % 10
                const four = Math.floor(counter / 1000) % 10
                const three = Math.floor(counter / 100) % 10
                const two = Math.floor(counter / 10) % 10
                const one = Math.floor(counter) % 10

                if (counter < 0) {
                    return () => {
                        
                        clearInterval(interval.current)
                    }
                } else {
                    
                    counter--
                    setData((counter).toString())
                    setSeven(seven);
                    setSix(six);
                    setFive(five);
                    setFour(four);
                    setThree(three);
                    setTwo(two);
                    setOne(one);
                    
                    if (counter == -1) {
                        Swal.fire({
                            title: 'Time Over!!!',
                            width: 600,
                            padding: '3em',
                            color: '#716add',
                            background: '#fff url("https://img.freepik.com/premium-vector/snowy-forest-background_23-2147975003.jpg?w=2000")',
                            backdrop: `
                                    rgba(0,0,123,0.4)
                                    url("https://i.gifer.com/PYh.gif")
                                    left top
                                    no-repeat
                                `
                        })
                    }
                }

            }, 1000);
        }else{
            return () => {
                        
                clearInterval(interval.current)
            } 
        }
    }
    if (counter == 0) {

    }
    useEffect(() => {
        startTime();
        return () => {
            clearInterval(interval.current)
        }
    })

    return (

        <div>
            <div className="timer">

                <h1>Timer</h1>
                <div>

                    <form className="row g-3" onSubmit={ev => {
                        ev.preventDefault();
                        setData(ev.target.data.value)
                    }}
                    >
                        <div className="col-auto">
                            <label htmlFor="inputTime" className="form-label ">Enter the time</label>
                        </div>
                        <div className="col-auto">

                            <input type="number" name="data" className="form-control" id="inputTime" placeholder="Time"></input>
                        </div>
                        <div className="col-auto">
                            <button id="buttonTimer" type="submit" className="btn btn-primary mb-3">Set Time</button>
                        </div>
                    </form>
                </div>

            </div>
            <div className="containerDigits">
                <div className="digit"><FontAwesomeIcon icon={faClock} /></div>

                <div className="digit">{digitSeven}</div>
                <div className="digit">{digitSix}</div>
                <div className="digit">{digitFive}</div>
                <div className="digit">{digitFour}</div>
                <div className="digit">{digitThree}</div>
                <div className="digit">{digitTwo}</div>
                <div className="digit">{digitOne}</div>
            </div>
        </div>

    )
}

export default Timer