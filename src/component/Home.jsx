import React, { useState } from "react";
import Rojo from "./Rojo";
import Ambar from "./Ambar";
import Verde from "./Verde";
import "../styles/index.css";

const Home = () => {
	const [pulsadoRojo, setPulsadoRojo] = useState(false);
	const [pulsadoAmbar, setPulsadoAmbar] = useState(false);
	const [pulsadoVerde, setPulsadoVerde] = useState(false);

	const handleClick = (color) => {
		if (color === "rojo") {
			if (!pulsadoRojo) { //si no está pulsado (si pulsadono está en true....)
				setPulsadoRojo(true); // poner pulsado en true
				setPulsadoAmbar(false);
				setPulsadoVerde(false);
			} else {
				// Si el botón rojo ya está encendido, apagarlo
				setPulsadoRojo(false);
			}
		}


		if (color === "ambar") {
			if (!pulsadoAmbar) { //si no está pulsado (si pulsadono está en true....)
				setPulsadoRojo(false); // poner pulsado en true
				setPulsadoAmbar(true);
				setPulsadoVerde(false);
			} else {
				// Si el botón rojo ya está encendido, apagarlo
				setPulsadoAmbar(false);
			}
		}

		if (color === "verde") {
			if (!pulsadoVerde) { //si no está pulsado (si pulsadono está en true....)
				setPulsadoRojo(false); // poner pulsado en true
				setPulsadoAmbar(false);
				setPulsadoVerde(true);
			} else {
				// Si el botón rojo ya está encendido, apagarlo
				setPulsadoVerde(false);
			}
		}
	}





	return (
		<div className="fondo">
			<div className="container d-flex flex-column justify-content-center align-items-center">
				<div className="barra"></div>
				<div className="cuerpo">
					<div onClick={() => handleClick("rojo")}>
						<Rojo pulsacion={pulsadoRojo} />
					</div>

					<div onClick={() => handleClick("ambar")}>
						<Ambar pulsacion={pulsadoAmbar} />
					</div>

					<div onClick={() => handleClick("verde")}>
						<Verde pulsacion={pulsadoVerde} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;