import React from "react";
import TeamCardSolicitude from "../molecules/TeamCardSolicitude";
import Title from "../atoms/Title";


const TeamSolicitude = ({teamsList, deleteSolicitude}) => {

    // Por cada equipo se mapea el arreglo de las solicitudes, 
    // por cada solicitud se crea una tarjeta
    let cards = teamsList.map((team, teamIndex)=>{
        // Si la longitud de la lista de solicttudes es 0, no retorna nada
        if(team.solicitude.length === 0){
            return null
        }

        // Si la longitud de solicitudes es mayor a 0, se mapea la lista 
        // y para cada solicitud se crea una tarjeta
        return team.solicitude.map((solicitude, index)=>{
            return (
                <TeamCardSolicitude 
                key={teamIndex + " " + index} 
                solicitudeIndex = {index}
                teamIndex = {teamIndex}
                title={team.name} 
                subtitle={solicitude} 
                deleteSolicitude={deleteSolicitude}
                />
            )
        })
        // Se aplica un flat al arreglo para que sea de solo una dimensión 
        // y se eliminan los valores indefinidos
    }).flat().filter(element => element !== undefined);

    

    return (
        <div className="TeamsSolicitudes">
            <Title title="Gestionar equipos"></Title>
            {/* Si no hay solicitudes se muestra el mensaje de que no hay solicitudes pendientes */}
            {cards.length>0 ? cards:<label className="TeamCard-title">No hay solicitudes pendientes</label>}
        </div>
    );
}

export default TeamSolicitude;