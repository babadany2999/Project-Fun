import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../Styles/Jobs/Training.css";
import "../../Styles/Jobs/Training.scss";


const TrainingSelected = () => {


    const params = useParams();

    const navigate = useNavigate();
    
    const [text, setText] = useState(params.type);

    useEffect(()=>{
        if(!params.type || !(["theta", "zeta", "psi", "omega", "delta", "gamma"].includes(params.type.trim().toLowerCase()))) {
            navigate("/404");
        }
        setText(params.type.charAt(0).toUpperCase() + params.type.slice(1));
    }, [params])

    
    return (
        <div className="TrainingSelectedWrapper MainPage">
            {params.type === "theta" ? 
            <>
            <div className="TrainingTitle">
            {Array.from(Array(40)).map((empty, i) => <span key={i}>Program {text}</span>)}
            </div>
            {/* <span className="TrainingTitle">Program {text}</span> */}
            {/* <img src={`/assets/Image_Icons/Greek_Letters/${params.type.trim().toLocaleLowerCase()}.png`}></img> */}
            <div className="TrainingTableWrapper" style={{background: `url(/assets/Image_Icons/Greek_Letters/${params.type.trim().toLocaleLowerCase()}.png)`,backgroundRepeat: "no-repeat", backgroundSize: "contain",
    backgroundPosition: "50% 50%", backgroundSize: "30%", backgroundColor: "rgba(255,255,255, 0.7)"}}>
            <table>
                <tbody>
                    <tr>
                        <th>Number</th>
                        <th>(Name)</th>
                        <th>Exercise</th>
                        <th>Description</th>
                        <th>(Sets)</th>
                        <th>(Reps)</th>
                        <th>(Duration)</th>
                        <th>(Distance)</th>
                        <th>(Weight)</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Warm-Up</td>
                        <td>Light jogging/Jumping jacks/Dynamic Stretches</td>
                        <td>Light jogging, jumping jacks, or dynamic stretches to raise your heart rate and prepare your body for exercise.</td>
                        <td>-</td>
                        <td>-</td>
                        <td>5-10 minutes</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>2</td>
                        <td rowSpan={2}>HIIT</td>
                        <td>Sprinting</td>
                        <td rowSpan={2}>This involves short bursts of high-intensity exercise followed by periods of rest.</td>
                        <td rowSpan={2}>5-10</td>
                        <td rowSpan={2}>-</td>
                        <td rowSpan={2}>30 seconds</td>
                        <td rowSpan={2}>-</td>
                        <td rowSpan={2}>-</td>
                    </tr>
                    <tr>
                        <td>Rest</td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>3</td>
                        <td rowSpan={2}>Plyometrics</td>
                        <td>Jump Squats</td>
                        <td rowSpan={2}>Plyometric exercises are explosive movements that can improve power and agility.</td>
                        <td rowSpan={2}>3</td>
                        <td>8-12</td>
                        <td rowSpan={2}>-</td>
                        <td rowSpan={2}>-</td>
                        <td rowSpan={2}>-</td>
                    </tr>
                    <tr>
                        <td>Alternating lunges with a jump</td>
                        <td>8-12(per leg)</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Jump Rope</td>
                        <td>Single Unders/Double Unders</td>
                        <td>Jumping rope is an excellent way to improve footwork, agility, and cardiovascular endurance. It also helps with coordination and timing.</td>
                        <td>3</td>
                        <td>-</td>
                        <td>3 minutes</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Cool Down</td>
                        <td>Light Jog/Walking</td>
                        <td>Light jogging or walking to bring your heart rate down gradually and prevent dizziness or lightheadedness.</td>
                        <td>-</td>
                        <td>-</td>
                        <td>5-10 minutes</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            </div>
            </>
         : ""}
        </div>
    )
}

export default TrainingSelected;