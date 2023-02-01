import React from "react";

const TeamCard = ({title, subtitle, setButtonText, teamID}) => {
    
    return (
        <button className="TeamCard" onClick={()=>(setButtonText(teamID))}>
            <label className="TeamCard-title">{title}</label>
            <label className="TeamCard-sub">{subtitle}</label>
        </button>
    );
}

export default TeamCard;