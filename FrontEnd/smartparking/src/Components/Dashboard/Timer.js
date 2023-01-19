import React, { useEffect, useState } from "react";

const Timer = (startTimer, stopTimer) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    //Timer Button Disable
    const [disable, setDisable] = useState(false);

    let timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds + 1);
            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }
        }, 1000);

        return () => clearInterval(timer);
    });

    const start = () => {
        setSeconds(0);
        setMinutes(0);
    };
    const stop = () => {
        clearInterval(timer);
    };

    return (
        <div className="timer">
            <div className="container">
                <div className="timer-container">
                    <p>
                        {minutes < 10 ? "0" + minutes : minutes} :
                        {seconds < 10 ? "0" + seconds : seconds}
                    </p>
                    {/* <button
                        className="start"
                        onClick={start}
                    //onClick={[start, () => setDisable(true)]}
                    //array to start the timer and then disable the button once it is clicked
                    >
                        Start Session
                    </button>
                    <button className="stop" onClick={stop}>
                        Stop Session
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Timer;