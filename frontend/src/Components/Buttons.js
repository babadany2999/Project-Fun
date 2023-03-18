import { Link } from "react-router-dom"
import "../Styles/Buttons.css";


const Buttons = ({link, name, rounded, disabled, selected, onClick}) => {


    return (
        <Link onClick={onClick} to={rounded ? "#" :"/" + link} className={`Buttons ${rounded? "RoundedButtons" : ""} ${disabled ? "ButtonsDisabled" : ""} ${selected ? "ButtonsSelected" : ""}`}>
            {rounded? "" :
            <>
            <span></span>
            <span></span>
            <span></span>
            <span></span></>}
            <p>{name}</p>
        </Link>
    )
}

export default Buttons;