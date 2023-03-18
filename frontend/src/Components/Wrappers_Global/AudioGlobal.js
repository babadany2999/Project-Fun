import {Howl, Howler} from 'howler';
import { useEffect, useState } from 'react';
import "../../Styles/Wrappers_Global/AudioGlobal.css";
import {BsPlayFill} from 'react-icons/bs';
import {TiMediaPause, TiMediaFastForward, TiMediaRewind} from 'react-icons/ti';
import { IconContext } from 'react-icons/lib';

const AudioGlobal = () => {


    const soundFile = {
        src: "assets//Audio/RipTear.mp4",
        artist: "Mick Gordon",
        track: "Rip & Tear"
    }

    const [controlsClass, setControlsClass] = useState("");


    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isAutoPlaying, setIsAutoplaying] = useState(false);

    const [sound, setSound] = useState(null);

    useEffect(()=>{
        if(isPlaying){
            if(sound === null){
                setSound(new Howl({
                    src: soundFile.src,
                    volume: 0.5,
                    autoplay: true
                }))   
            }else{
                sound.play();
            } 
        }
    }, [isPlaying, sound])


        const handleMouseHover = () => {
            setControlsClass("AudioGlobalControlsHovered");
        }
        const handleMouseLeave = () => {
            setControlsClass("");
        }

        const handleClickPlay = () => {
            setIsPaused(false);
            setIsPlaying(true);
        }

        const handleClickPause = () => {
            setIsPlaying(false);
            setIsPaused(true);
        }


        useEffect(()=>{
            if(isPaused && sound !== null) {
                sound.pause();
            }else{

            }
        }, [isPaused, sound])


        return <div className="AudioGlobal" onMouseOver={handleMouseHover} onMouseLeave={handleMouseLeave}>
            <div className={`AudioGlobalControls ${controlsClass}`}>
                <IconContext.Provider value={{color: "#402392", size: 40, className:"AudioGlobalControlsBtns"}}>
                <TiMediaRewind/>

                {/* Play and resume buttons */}
                {isPlaying ? <TiMediaPause onClick={handleClickPause}/> : <BsPlayFill onClick={handleClickPlay}/>}
                <TiMediaFastForward/>
            
                </IconContext.Provider>
            </div>
            <div className="AudioGlobalInfo">
            <div className="AudioGlobalLine">
                </div>
                <span className="AudioGlobalText">{soundFile.artist}&nbsp;&nbsp;✹&nbsp;&nbsp;{soundFile.track}
                </span>
            </div>
        </div>

}

export default AudioGlobal;