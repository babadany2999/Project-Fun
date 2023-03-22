import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Calendar.css';

const Calendar = () => {


    // Month starts from 0;
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedYear, setSelectedYear] = useState(2023);
    // Day starts from 1;
    const [currentDay, setCurrentDay] = useState(1);

    const [dataArray, setDataArray] = useState([]);

    const navigate = useNavigate();


    useEffect(()=>{
        const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        const day = date.getDate();
        setSelectedMonth(month);
        setSelectedYear(year);
        setCurrentDay(day);
    }, [])

    const returnMonthInName = (month_idx) => {
        switch(month_idx) {
            case 0: return "January";
            case 1: return "February";
            case 2: return "March";
            case 3: return "April";
            case 4: return "May";
            case 5: return "June";
            case 6: return "July";
            case 7: return "August";
            case 8: return "September";
            case 9: return "October";
            case 10: return "November";
            case 11: return "December";
        }
    }


    const handleNextMonth = () => {
        // Logic checking
        if(selectedMonth >= 11) return;

        setSelectedMonth(selectedMonth + 1);
    }
    const handlePreviousMonth = () => {
        // Logic checking
        if (selectedMonth <= 0) return;

        setSelectedMonth(selectedMonth - 1);
    }

    const handleNextYear = () => {
        // Logic checking
        if(selectedYear >= 2100) return;

        setSelectedYear(selectedYear + 1);
    }
    const handlePreviousYear = () => {
        // Logic checking
        const date = new Date();
        if(selectedYear <= date.getFullYear()) return;

        setSelectedYear(selectedYear - 1);
    }


    const [classNameHeader, setClassNameHeader] = useState("");

    const handleMouseOver = (type) => {
        switch(type) {
            case "previous":
                setClassNameHeader("CalendarHeaderAnimPrevious");
            break;
            case "next":
                setClassNameHeader("CalendarHeaderAnimNext")
                 break;
            default: break;
        }
    }
    const handleMouseLeave = (type) => {
        switch(type) {
            case "previous":
                setClassNameHeader("CalendarHeaderAnimPreviousFinished");
            break;
            case "next":
                setClassNameHeader("CalendarHeaderAnimNextFinished")
                 break;
            default: break;
        }
    }


    const fillCalendarContent = (month, year) => {
        const data_arr = []
        const date = new Date(year, month, 1);
        // const last_day_date = new Date(year, month, new Date(year, month+1, 0))
        // Starts from 0 as Sunday and ends in 6 as Saturday
        const day = date.getDay();
        // Get the last day date in the month
        const last_day_date= new Date(year, month, new Date(year, month + 1, 0).getDate());
        // Get the last day
        const last_day = last_day_date.getDay();
        // Check if the day is Sunday
        if(day === 0) {
            // Check if the previous month exists
            if(month !== 0) {
                prev_logic(year, month, day, data_arr);
            }else{
                prev_logic(year - 1, 11, day, data_arr);
            }
        }
        // Check if the day isn't Monday
        else if(day !== 1) {
            if(month !== 0) {
                prev_logic(year, month, day, data_arr);
            }else{
                prev_logic(year - 1, 11, day, data_arr);
            }
        }
        current_logic(year, month, data_arr);
        if(last_day !== 0) {
            // Check if it's not the last month in the year
                next_logic(last_day, data_arr)
            
        }
        return data_arr;
    }

    const prev_logic = (year, month, day, data_arr) => {
        // Get number of days in previous month
        var days_previous_month;
        if(month === 11 ){
            days_previous_month = new Date(year, month + 1, 0).getDate();
        }else{
            days_previous_month = new Date(year, month, 0).getDate();
        }
        if(day === 0){
            var idx = 6;
            while(idx !== 0) {
                idx--;
                data_arr.push({
                    day_nr: days_previous_month - idx,
                    is_from_previous: true,
                    is_from_next: false
                })
            }
        }
        else{
            var idx = day - 1;
            while(idx !== 0) {
                idx--;
                data_arr.push({
                    day_nr: days_previous_month - idx,
                    is_from_previous: true,
                    is_from_next: false
                })
            }
        }
    }

    const next_logic = (last_day, data_arr) => {
        const days_left_in_next_month = 7 - last_day;
        var idx = 0;
        while(idx !== days_left_in_next_month) {
            idx++;
            data_arr.push({
                day_nr: idx,
                is_from_previous: false,
                is_from_next: true
            })
        }
    }


    const current_logic = (year, month, data_arr) => {
        // Month starts from 1 so we must increment it for the current month.
        const days_in_month = new Date(year, month + 1, 0).getDate();

        var idx = 1;
        while(idx <= days_in_month){
            data_arr.push({
                day_nr: idx,
                is_from_previous: false,
                is_from_next: false
            })
            idx++;
        }

    }

    useEffect(()=>{
        if(selectedMonth !== null){
            setDataArray(fillCalendarContent(selectedMonth, selectedYear))
        }
    }, [selectedMonth, selectedYear])


    const handleLegendHover = () => {}
    const handleLegendLeave = () => {}

    const handleClick = (day_nr, type) => {
        if(type !== "invalid") {
            navigate(`/calendar/${type}/${day_nr}/${selectedMonth}/${selectedYear}`)
        }
    }


    return (
        <div className="CalendarWrapper MainPage">
            <div className="CalendarContainer">
                <div className="CalendarLegend" onMouseOver={handleLegendHover} onMouseLeave={handleLegendLeave}></div>
            <div className={`CalendarHeader ${classNameHeader}`}>
                <div className="CalendarMonth">
                        <button className={`CalendarMonthBtn ${selectedMonth <= 0 ? "CalendarBtnsNoDisplay": ""}`} onMouseOver={() => handleMouseOver("previous")} onMouseLeave={() => handleMouseLeave("previous")} onClick={handlePreviousMonth}>
                            <span>&#8249;</span>
                        </button>
                        <span>{returnMonthInName(selectedMonth)}</span>
                        <button className={`CalendarMonthBtn ${selectedMonth >= 11 ? "CalendarBtnsNoDisplay" : ""}`} onMouseOver={() => handleMouseOver("next")} onMouseLeave={() => handleMouseLeave("next")} onClick={handleNextMonth}>
                            <span>&#8250;</span>
                        </button>
                    </div>
                <div className="CalendarYear">
                    <button className={`CalendarYearBtn ${selectedYear <= new Date().getFullYear() ? "CalendarBtnsNoDisplay" : ""}`} onClick={handlePreviousYear}> 
                    <span>&#8249;</span>
                    </button>
                    <span>{selectedYear}</span>
                    <button className={`CalendarYearBtn ${selectedYear >= 2100 ? "CalendarBtnsNoDisplay" : ""}`} onClick={handleNextYear}>
                    <span>&#8250;</span>
                    </button>
                </div>
            </div>
            <div className="CalendarContent">
                <div className="CalendarDayNames">
                    <span>mon</span>
                    <span>tue</span>
                    <span>wed</span>
                    <span>thu</span>
                    <span>fri</span>
                    <span>sat</span>
                    <span>sun</span>
                </div>
                <div className="CalendarDays">
                    {dataArray.map((_, idx) => {
                        if(idx === 0){
                            return <CalendarRow key={idx} day_array={dataArray.slice(0, 7)} selectedMonth={selectedMonth} selectedYear={selectedYear} handleClick={handleClick}></CalendarRow>
                        }
                        else if(idx % 7 === 0) {
                            return <CalendarRow key={idx} day_array={dataArray.slice(idx, idx + 7)} selectedMonth={selectedMonth} selectedYear={selectedYear} handleClick={handleClick}></CalendarRow>
                        }
                    })}
                </div>
            </div>
            </div>
        </div>
    )
}

const CalendarRow = ({day_array, selectedMonth, selectedYear, handleClick}) => {

    const return_if_no_special_day = (day_nr) => {
        if(selectedYear === 2023) {
            if(selectedMonth === 4){    
                return day_nr > 20;
            }else if(selectedMonth < 4) return false;
            else return true;
        }else{
            return true;
        }
    }

    const return_if_before_start_day = (day_nr) => {
        if(selectedYear === 2023) {
            if(selectedMonth === 4) {
                return day_nr < 20;
            }
            else if(selectedMonth < 4) {
                return true;
            }else return false;
        }
        else return false;
    }


    return (
        <div className="CalendarRow">
            {
                day_array.map((day, id) => {
                    const truth_month_day = day.day_nr === 20 && selectedMonth === 4;
                    var isStartDay = false;
                    var isDDay = false;
                    const is_from_other_month = day.is_from_previous || day.is_from_next;
                    if(truth_month_day){
                        isStartDay = selectedYear === 2023;
                        isDDay = selectedYear === 2030;
                    }
                    return <CalendarDay dayNumber={day.day_nr} key={id} isInvalid={is_from_other_month || return_if_before_start_day(day.day_nr)}
                     isStartDay={isStartDay}
                     isDDay={isDDay}
                     isNormalTrainingDay={[0, 1, 2, 3, 4].includes(id) && !(isStartDay || isDDay) && return_if_no_special_day(day.day_nr) && !(is_from_other_month)}
                     isSaturdayTrainingDay={id === 5 && !(isStartDay || isDDay) && return_if_no_special_day(day.day_nr) && !(is_from_other_month)}
                     isSundayTrainingDay={id === 6 && !(isStartDay || isDDay) && return_if_no_special_day(day.day_nr) && !(is_from_other_month)}
                     handleClick={handleClick}
                     ></CalendarDay>
                })
            }
        </div>
    )
}
const CalendarDay = ({dayNumber, isInvalid, isStartDay, isDDay, isNormalTrainingDay, isSaturdayTrainingDay, isSundayTrainingDay, handleClick}) => {



        const return_nav_link_type = useCallback(() => {
            if(isStartDay) return "start";
            if(isDDay) return "dday";
            if(isNormalTrainingDay) return "normal";
            if(isSaturdayTrainingDay) return "saturday";
            if(isSundayTrainingDay) return "sunday";
            if(isInvalid) return "invalid";
        }, [dayNumber])
        

    return (
        <div className={`CalendarDay ${isInvalid ? "CalendarDayInvalid" : ""} ${isStartDay ? "CalendarStartDay" : ""} ${isDDay ? "CalendarDDay" : ""}
        ${isNormalTrainingDay ? "CalendarNormalTrainingDay" : ""} ${isSaturdayTrainingDay ? "CalendarSaturdayTrainingDay" : ""} 
        ${isSundayTrainingDay ? "CalendarSundayTrainingDay" : ""}
        `} onClick={() => handleClick(dayNumber, return_nav_link_type())}>
            <span>
                {dayNumber}
            </span>
        </div>
    )
}


export default Calendar;