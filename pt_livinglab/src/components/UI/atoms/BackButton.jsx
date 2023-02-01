import React from "react";
import back from "../../../assets/icons/back.svg"


const BackButton = () => {
    return (
        <button className="backButton"><img src={back} alt="back"></img></button>
    );
}

export default BackButton;