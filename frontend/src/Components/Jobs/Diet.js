import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../../Styles/Jobs/Diet.css";

const DietSelected = () => {

    const params = useParams();

    const navigate = useNavigate();


    useEffect(()=>{
        if(!params.type || !(["breakfast", "lunch", "dinner"].includes(params.type.trim().toLowerCase()))) {
            navigate("/404");
        }
        if(!params.number || !(["menu_one", "menu_two", "menu_three"].includes(params.number.trim().toLowerCase()))){
            navigate("/404");
        }
    } ,[params])


    return (
        <div className="DietSelectedWrapper">
            
        </div>
    )
   
}


export default DietSelected;