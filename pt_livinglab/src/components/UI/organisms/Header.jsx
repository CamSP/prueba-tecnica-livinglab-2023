import React from "react";
import logo from "../../../assets/images/logo.svg"
import sabana from "../../../assets/images/sabana.svg"
import bars from "../../../assets/icons/bars.svg"
import BackButton from "../atoms/BackButton";

const Header = () => {
    // Header de la pagina
    return (

            <div className="header">
                <img src={bars} alt="barsManu"/>
                <img src={logo} alt="logo" className="logo"/>
                <img src={sabana} alt="sabana_shield" className="sabana"/>
                <BackButton></BackButton>
            </div>
            
    );
}

export default Header;