import React from "react";

const ButtonIco = ({icon, onclick}) => {
    return (
        <button type="button" className="buttonIco" onClick={onclick}>{icon}</button>
    );
}

export default ButtonIco;