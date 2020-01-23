import React, { useState } from "react";
import "./App.css";
import Inputs from "./inputs.js";
import Box from "./box.js";

function App() {
	// usesteate will hole the 3 numbers change with sliders
	// sliders will be their own componemnt
	// bow is just a div inline css
	const [colors, setColors] = useState([]);

	return (
		<div className="App">
			<Inputs />
			<Box />
		</div>
	);
}

export default App;
