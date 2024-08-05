import React, { useEffect, useState } from "react";
import "../styles/ambar.css";




//create your first component
const Ambar = ({pulsacion}) => {

  
    return (
        <div className="d-flex">
            <div className={`${pulsacion === false ? "caja-apagado-ambar" : "caja-encendido-ambar"}`}>
                {/* <div className="ambar"></div> */}


            </div>


        </div >

    );
};

export default Ambar;