import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../Styles/Jobs/Calendar.css";


const CalendarSelected = () => {

    const {type, day, month, year} = useParams();

    const navigate = useNavigate();

    // Proper date checking

    useEffect(()=>{
        const date = new Date(year, month, day);
        // Basic day, month and year check
        if(day <= 0 || day > 31) navigate("/calendar");
        if(month < 0 || month > 11) navigate("/calendar");
        if(year < 2023 || year > 2100) navigate("/calendar");
        // Check if date is real
        if(date.getDate() !== parseInt(day)) navigate("/calendar");
        if(date.getMonth() !== parseInt(month)) navigate("/calendar");
        if(date.getFullYear() !== parseInt(year)) navigate("/calendar");
    }, [day, month, year])


    return (
        <div className="CalendarSelectedWrapper MainPage">
            <div className="CalendarSelectedContainer">
                <div className="CalendarSelectedHeader">
                    <span>Day: {day}</span>
                    <span>Month: {month}</span>
                    <span>Year: {year}</span>
                </div>
                    <table className="CalendarSelectedContent">
                        <tbody>
                            <tr>
                                <th>Time Frame(HH:MM-HH:MM)</th>
                                <th>Name</th>
                                <th>(Description)</th>
                            </tr>
                            <tr>
                                <td>00:00-08:00</td>
                                <td>Sleep</td>
                                <td>Daily sleep</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    )


}


export default CalendarSelected;