import React, {useState} from "react";
import ButtonIco from "../atoms/ButtonIco"
import check from "../../../assets/icons/check.svg"
import block from "../../../assets/icons/block.svg"
import deleteIco from "../../../assets/icons/deleteIco.svg"

const TeamCardSolicitude = ({solicitudeIndex, teamIndex, title, subtitle, deleteSolicitude}) => {
    
    // Función que maneja las opciones de las tarjetas
    const handleOption = (message, background) => {
        handleClick()
        setBackground(background)
        setMessage(message)
        setTimeout(() => {
            deleteSolicitude(teamIndex, solicitudeIndex)
          }, 3000);
    }
    
    // Hook para la visibilidad de la alerta de la opción elegida
    const [isVisible, setIsVisible] = useState(true);

    // Hook mensaje de la alerta para la opción escogida
    const [message, setMessage] = useState("");

    // Hook para el background de la alerta para la opción escogida
    const [background, setBackground] = useState("white");

    // Función que cambia la visibilidad de la alerta
    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="TeamCardSolicitude" style={{ backgroundColor: background }}>
            <div className="descriptionSolicitude" style={{ display: isVisible ? 'flex' : 'none' }}>
                <label className="TeamCard-title">{title}</label>
                <label className="TeamCard-sub">{subtitle}</label>
            </div>
            <div className="buttonsSolicitude" style={{ display: isVisible ? 'flex' : 'none' }}>
                <ButtonIco icon={<img src={check} alt="check"/>} onclick={()=>handleOption("Aprovado", "lime")}></ButtonIco>
                <ButtonIco icon={<img src={block} alt="block"/>} onclick={()=>handleOption("Denegado", "red")}></ButtonIco>
                <ButtonIco icon={<img src={deleteIco} alt="delete"/>} onclick={()=>handleOption("Eliminado", "goldenrod")}></ButtonIco>
            </div>

            <div className="alertSolicitude" style={{ display: isVisible ? 'none' : 'flex' }}>
                <label className="TeamCard-title">{message}</label>
            </div>
        </div>
    );

}

export default TeamCardSolicitude;