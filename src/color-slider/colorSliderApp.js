import React, { useState } from "react";
import Inputs from "./inputs.js";
import Box from "./box.js";

function ColorSlider() {
	// usesteate will hole the 3 numbers change with sliders
	// sliders will be their own componemnt
	// bow is just a div inline css
	const [colors, setColors] = useState({ red: 0, green: 0, blue: 0 });
	const handleChange = e => {
		let copy = { ...colors };
		let id = e.target.parentElement.className;
		let value = e.target.value;
		copy[`${id}`] = value;
		setColors(copy);
	};

	return (
		<div className="App">
			<Inputs colors={colors} handleChange={handleChange} />
			<Box colors={colors} />
		</div>
	);
}

export default ColorSlider;
