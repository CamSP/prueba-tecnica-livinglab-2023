import React from "react";
import Title from "../atoms/Title";
import FormTeams from "../molecules/FormTeams";

const TeamForm = ({buttonText, setteamsList, teamsList, teamID, setButtonText, setTeamID}) => {
    // Contenedor del formulario, se añade el titulo y el formulario
    return (
        <div className="TeamForm">
            <Title title="Gestión del equipo"></Title>
            <FormTeams buttonText={buttonText} teamsList={teamsList} setButtonText={setButtonText} setteamsList={setteamsList} setTeamID={setTeamID} teamID={teamID}></FormTeams>
        </div>
    );
}

export default TeamForm;