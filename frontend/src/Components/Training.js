import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Training.css';
import Buttons from './Buttons';
// meditation, reaction, balance, powerlifting
const Training = () => {
    return (
        <div className="TrainingWrapper MainPage">
            <div>
                <Buttons link={`training/chi`} name={"Meditation"} rounded={true} bg_image={"/assets/Image_Icons/meditation.png"}></Buttons>
                <Buttons link={`training/xi`} name={"Reaction"} rounded={true} bg_image={"/assets/Image_Icons/reaction.png"}></Buttons>
                <Buttons link={`training/epsilon`} name={"Balance"} rounded={true} bg_image={"/assets/Image_Icons/balance.png"}></Buttons>
                <Buttons link={`training/omikron`} name={"Strength"} rounded={true} bg_image={"/assets/Image_Icons/powerlifting.png"}></Buttons>
            </div>
            <div>
                <Buttons link={`training/theta`} name={"Cardiovascular"} rounded={true} bg_image={"/assets/Image_Icons/cardiovascular.png"}></Buttons>
                <Buttons link={`training/zeta`} name={"Calisthenics"} rounded={true} bg_image={"/assets/Image_Icons/calisthenics.png"}></Buttons>
                <Buttons link={`training/psi`} name={"Athleticism"} rounded={true} bg_image={"/assets/Image_Icons/athleticism.png"}></Buttons>
            </div>
            <div>
            <Buttons link={`training/omega`} name={"Stretching"} rounded={true} bg_image={"/assets/Image_Icons/stretching.png"}></Buttons>
                <Buttons link={`training/delta`} name={"Martial Arts"} rounded={true} bg_image={"/assets/Image_Icons/martial-arts.png"}></Buttons>
            </div>
            <div>
            <Buttons link={`training/gamma`} name={"Weapons"} rounded={true} bg_image={"/assets/Image_Icons/weapons.webp"}></Buttons>
            </div>

            {/* Cardiovascular, calisthenics, athleticism, stretching, martial arts, knife, katana */}
        </div>
    )
}


export default Training;