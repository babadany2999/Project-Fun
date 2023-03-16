import { Link } from "react-router-dom"
import "../Styles/Buttons.css";


const Buttons = ({link, name}) => {
    return (
        <Link to={"/" + link} className={"Buttons"}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>{name}</p>
        </Link>
    )
}

export default Buttons;