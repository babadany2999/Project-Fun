import "../../Styles/Misc/CountdownTimer.css";
import {useEffect, useState} from 'react';


const CountdownTimer = ({title, time}) => {


    const [seconds, setSeconds] = useState();
    const [minutes, setMinutes] = useState();
    const [hours, setHours] = useState();
    const [days, setDays] = useState();


    useEffect(()=>{
        var miliseconds;
        var interval;
        if(time){
            interval = setInterval(()=>{
                const date_current = new Date();
                // The format time is in: {day: DD, month: MM, year: YYYY}
                const date_needed = new Date(time.year, time.month - 1, time.day);
                const miliseconds = date_needed - date_current;
 
                var days = Math.floor(miliseconds / (1000 * 60 * 60 * 24));
                var hours = Math.floor((miliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((miliseconds % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((miliseconds % (1000 * 60)) / 1000);
    
                setSeconds(seconds);
                setMinutes(minutes);
                setHours(hours);
                setDays(days);
            } , 1000)
        }
        return () => {
            if(miliseconds === 0){
                clearInterval(interval)
            }
        }
    } , [time])


    return (
        <div className="CountdownTimer">
            <span className="CountdownTimerTitle">{title}</span>
            <div className="CountdownTimerTime">
                <div className="CountdownTimerTimeValue">{days}</div>
                <div className="CountdownTimerSeparator">:</div>
                <div className="CountdownTimerTimeValue">{hours}</div>
                <div className="CountdownTimerSeparator">:</div>
                <div className="CountdownTimerTimeValue">{minutes}</div>
                <div className="CountdownTimerSeparator">:</div>
                <div className="CountdownTimerTimeValue">{seconds}</div>
            </div>
        </div>
    )
}


const CountdownTimerWrapper = () => {
    return (
        <div className="CountdownTimerWrapper">
        <CountdownTimer title={"Start Day"} time={{day: 20, month: 5, year: 2023}}></CountdownTimer>
        <CountdownTimer title={"D-Day"} time={{day: 20, month: 5, year: 2030}}></CountdownTimer>
        </div>
    )
}


export default CountdownTimerWrapper;