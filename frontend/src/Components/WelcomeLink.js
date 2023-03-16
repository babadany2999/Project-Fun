import { Link } from "react-router-dom"
import "../Styles/WelcomeLink.css";


const WelcomeLink = ({link, name}) => {
    return (
        <Link to={"/" + link} className={"WelcomeLink"}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>{name}</p>
        </Link>
    )
}

export default WelcomeLink;