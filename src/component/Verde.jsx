import React, { useEffect, useState } from "react";
import "../styles/verde.css";




//create your first component
const Verde = ({ pulsacion }) => {

    return (
        <div className="d-flex">
            <div className={`${pulsacion === false ? "caja-apagado-verde" : "caja-encendido-verde"}`}>
                {/* <div className="verde"></div> */}


            </div>


        </div >

    );
};

export default Verde;