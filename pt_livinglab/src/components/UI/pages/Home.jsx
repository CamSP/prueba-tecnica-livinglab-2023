import React, {useState} from "react";
import Header from '../organisms/Header';
import TeamForm from '../organisms/FormSection';
import Teams from '../organisms/Teams';
import TeamSolicitude from '../organisms/TeamSolicitude';
import teamList from "../../../assets/files/teamList.json"


const Home = () => {

    // Se importa el archivo JSOM y se almacena en un hook
    const [teamsList, setteamsList] = useState(teamList.teams);
    // Hook con el texto del boton de submit del formulario
    const [buttonText, setButtonText] = useState("Crear");
    // ID del equipo seleccionado
    const [teamID, setTeamID] = useState(undefined);

    // Cuando se seleccióna un equipo se ejecuta esta función
    const TeamHandler = (newTeamID)=>{
        // Si el ID del equipo es diferente al ID del actual, se cambia el texto del
        // boton de submit del formulario
        if(newTeamID !== teamID){
            // Se actualiza el valor del ID del equipo
            setTeamID(newTeamID)
            // Se actualiza el boton de submit
            setButtonText("Actualizar")
            return
        }
        // En caso que el ID sea igual, se reinicia el valor del ID para vaciar
        // el formulario, luego se actualiza el boton de submit
        setTeamID(undefined)
        setButtonText("Crear")
    }
    
    // Función para eliminar las solicitudes pendientes de los equipos
    const deleteSolicitude = (teamID, solicitudeID) => {
        // Se hace una copia de la lista de equipos
        const tempTeamList = [...teamsList];
        // Se elimina la solicitud correspondiente
        tempTeamList[teamID].solicitude.splice(solicitudeID, 1);
        // Se actualiza la lista de equipos
        setteamsList(tempTeamList);
    }

    return (
        <div className='App'>
            <Header/>
            <div className="Content">
                <TeamForm buttonText = {buttonText} setteamsList={setteamsList} teamsList={teamsList} setButtonText={setButtonText} setTeamID={setTeamID} teamID={teamID}/>
                <div className="TeamsSide">
                    <Teams teamsList={teamsList} setButtonText={TeamHandler}/>
                    <TeamSolicitude teamsList={teamsList} deleteSolicitude={deleteSolicitude}/>
                </div>
            </div>
        </div>
    );
}

export default Home;