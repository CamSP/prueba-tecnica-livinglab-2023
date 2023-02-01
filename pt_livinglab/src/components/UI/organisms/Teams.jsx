import React from "react";
import TeamCard from "../molecules/TeamCard";
import Title from "../atoms/Title";


const Teams = ({teamsList, setButtonText}) => {

    
    // Se mapea la lista de equipos y por cada uno se crea una tarjeta 
    // con la información correspondiente
    let cards = teamsList.map((team, index)=>{
        return(
            <TeamCard key={index} 
            title={team.name} 
            subtitle={team.nMembers + " integrantes"}
            setButtonText = {setButtonText}
            teamID={team.id}
            />
        )
    })

    // Sección con el listado de los equipos
    return (
        <div className="Teams">
            <Title title="Gestionar equipos"></Title>
            {cards}
        </div>
    );
}

export default Teams;