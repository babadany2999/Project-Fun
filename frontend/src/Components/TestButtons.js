import { Link } from "react-router-dom"
import "../Styles/TestButtons.css";


const TestButtons = ({link, name, rounded, disabled, selected, onClick, options}) => {



    return <Link to={"/" + link} className="TestButtons">
        <p>{name}</p>
    </Link>

}


export default TestButtons;