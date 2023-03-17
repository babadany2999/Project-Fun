import React from 'react';
import '../Styles/Welcome.css';
import "../Styles/Diet.css";
import Buttons from './Buttons';


const Diet = () => {
    return (
        <div className="DietWrapper MainPage">
            <Buttons link={"diet/breakfast"} name={"Breakfast"}/>
            <Buttons link={"diet/lunch"} name={"Lunch"}/>
            <Buttons link={"diet/dinner"} name={"Dinner"}/>
        </div>
    )
}

export default Diet