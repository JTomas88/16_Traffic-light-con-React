import React, { useEffect, useState } from "react";
import "../styles/rojo.css";




//create your first component
const Rojo = ({pulsacion}) => {


    return (
        <div className="d-flex">
            <div className={`${pulsacion === false ? "caja-apagado-rojo" : "caja-encendido-rojo"}`}>
                {/* <div className="rojo"></div> */}


            </div>


        </div >

    );
};

export default Rojo;