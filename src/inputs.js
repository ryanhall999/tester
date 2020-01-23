import React from "react";

export default function Inputs() {
	return (
		<div>
			<div class="slidecontainer">
				<input type="range" min="1" max="255" value="50" class="slider"></input>
			</div>
			<div class="slidecontainer">
				<input type="range" min="1" max="255" value="50" class="slider"></input>
			</div>
			<div class="slidecontainer">
				<input type="range" min="1" max="255" value="50" class="slider"></input>
			</div>
		</div>
	);
}
